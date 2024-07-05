#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include "request.h"
#include "file_serving.h"
#include "hashtable.h"
#include "server.h"
#include "post_handler.h"

#define BUFFER_SIZE 16384
#define MAX_PAGE_NAME_LENGTH 32

extern HashTable *routes;
extern HashTable *post_routes;

void handle_request(int client_socket)
{
	char buffer[BUFFER_SIZE];
	int read_size;
	const char *method, *version;
	char *path;

	// Initialize the buffer
	memset(buffer, 0, BUFFER_SIZE);

	read_size = read(client_socket, buffer, BUFFER_SIZE - 1);
	if (read_size < 0)
	{
		perror("read failed");
		close(client_socket);
		return;
	}
	buffer[read_size] = '\0';

	// Copy the buffer for header parsing
	char header_buffer[BUFFER_SIZE];
	strncpy(header_buffer, buffer, BUFFER_SIZE);
	header_buffer[BUFFER_SIZE - 1] = '\0'; // Ensure null-termination

	method = strtok(header_buffer, " ");
	path = strtok(NULL, " ");
	version = strtok(NULL, "\r\n");

	if (method == NULL || path == NULL || version == NULL)
	{
		const char *bad_request = "HTTP/1.1 400 Bad Request\r\nContent-Length: 15\r\n\r\n400 Bad Request";
		write(client_socket, bad_request, strlen(bad_request));
		close(client_socket);
		return;
	}

	printf("Request: %s %s %s\n", method, path, version);

	if (strcmp(method, "POST") == 0)
	{
		if (ht_search(post_routes, path) == -1)
		{
			const char *not_found = "HTTP/1.1 404 Not Found\r\nContent-Length: 13\r\n\r\n404 Not Found";
			write(client_socket, not_found, strlen(not_found));
			close(client_socket);
			return;
		}

		// Extract body from POST request
		char *body = strstr(buffer, "\r\n\r\n");
		if (body)
		{
			body += 4; // Move past the "\r\n\r\n"
			handle_post_request(client_socket, path, body);
		}
		else
		{
			const char *bad_request = "HTTP/1.1 400 Bad Request\r\nContent-Length: 15\r\n\r\n400 Bad Request";
			write(client_socket, bad_request, strlen(bad_request));
			close(client_socket);
		}
		return;
	}

	// Default to pages/index.html if root is requested
	if (ht_search(routes, path) == -1)
	{
		const char *not_found = "HTTP/1.1 404 Not Found\r\nContent-Length: 13\r\n\r\n404 Not Found";
		write(client_socket, not_found, strlen(not_found));
		close(client_socket);
		return;
	}

	// Determine the directory based on the file extension or path
	const char *directory = "pages"; // Default directory
	if (is_static_file(path))
	{
		directory = "static";
	}

	if (strcmp(directory, "pages") == 0)
	{
		// Get lang from cookie or Accept-Language Header, the lang has only 2 chars
		char *lang = NULL;

		char *cookie = strstr(buffer, "Cookie: ");
		if (cookie)
		{
			cookie += 8; // Move past the "Cookie: "
			lang = strstr(cookie, "lang=");
			if (lang)
			{
				lang += 5;		// Move past the "lang="
				lang[2] = '\0'; // Null-terminate the lang
			}
		}

		if (lang == NULL)
		{
			// If lang is not found in cookie, check Accept-Language header
			char *accept_language = strstr(buffer, "Accept-Language: ");
			if (accept_language)
			{
				accept_language += 17; // Move past "Accept-Language: "
				if (strlen(accept_language) >= 2)
				{
					static char lang_buffer[3];
					strncpy(lang_buffer, accept_language, 2);
					lang_buffer[2] = '\0';
					lang = lang_buffer;
				}
			}
		}

		// If the lang is not set, default to English
		if (lang == NULL || (strcmp(lang, "en") != 0 && strcmp(lang, "pt") != 0))
		{
			lang = "en";
		}

		static char new_path[MAX_PAGE_NAME_LENGTH]; // Buffer to store the new path
		// If the path is root, default to index.html
		if (strcmp(path, "/") == 0 || strcmp(path, "/index.html") == 0 || strcmp(path, "/index.html/") == 0)
		{
			snprintf(new_path, sizeof(new_path), "/%s/index.html", lang);
			path = new_path;
		}
		else if (strcmp(path, "/about") == 0 || strcmp(path, "/about/") == 0)
		{
			snprintf(new_path, sizeof(new_path), "/%s/about.html", lang);
			path = new_path;
		}
	}

	// Build the full path
	char full_path[MAX_PAGE_NAME_LENGTH];
	snprintf(full_path, sizeof(full_path), "%s%s", directory, path);
	serve_file(client_socket, full_path);
}

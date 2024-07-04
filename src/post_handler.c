#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include "post_handler.h"

#define BUFFER_SIZE 16384

void handle_set_lang(int client_socket, const char *body)
{
	char lang[3] = {0};

	// Parse JSON body
	const char *lang_key = "\"lang\":\"";
	char *lang_start = strstr(body, lang_key);
	if (lang_start)
	{
		lang_start += strlen(lang_key);
		strncpy(lang, lang_start, 2);
		lang[2] = '\0'; // Ensure null-terminated string
	}

	// Validate lang field (should be 2 characters)
	if (strlen(lang) != 2)
	{
		const char *bad_request = "HTTP/1.1 400 Bad Request\r\nContent-Length: 15\r\n\r\n400 Bad Request";
		write(client_socket, bad_request, strlen(bad_request));
		close(client_socket);
		return;
	}

	// Set cookie
	char response[BUFFER_SIZE];
	snprintf(response, sizeof(response),
			 "HTTP/1.1 200 OK\r\n"
			 "Set-Cookie: lang=%s\r\n"
			 "Content-Length: 0\r\n"
			 "\r\n",
			 lang);

	write(client_socket, response, strlen(response));
	close(client_socket);
}

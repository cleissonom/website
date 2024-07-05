#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>
#include <sys/stat.h>
#include <inttypes.h>
#include "file_serving.h"

#define BUFFER_SIZE 16384
#define HEADER_SIZE 256

const char *get_mime_type(const char *path)
{
	size_t map_size = sizeof(mime_map) / sizeof(mime_map[0]);
	for (size_t i = 0; i < map_size; ++i)
	{
		if (strstr(path, mime_map[i].extension) != NULL)
		{
			return mime_map[i].mime_type;
		}
	}
	return "text/html";
}

int is_static_file(const char *path)
{
	size_t map_size = sizeof(mime_map) / sizeof(mime_map[0]);
	for (size_t j = 0; j < map_size; ++j)
	{
		if (strstr(path, mime_map[j].extension) != NULL)
		{
			return 1;
		}
	}
	return 0;
}

void serve_file(int client_socket, const char *path)
{
	int file_fd;
	char buffer[BUFFER_SIZE];
	ssize_t read_size;
	struct stat file_stat;

	// Open the file
	file_fd = open(path, O_RDONLY);
	if (file_fd < 0)
	{
		const char *not_found = "HTTP/1.1 404 Not Found\r\nContent-Length: 13\r\n\r\n404 Not Found";
		write(client_socket, not_found, strlen(not_found));
		close(client_socket);
		return;
	}

	// Get the file size
	if (fstat(file_fd, &file_stat) < 0)
	{
		perror("fstat");
		close(file_fd);
		close(client_socket);
		return;
	}

	// Get the file mime type
	const char *content_type = get_mime_type(path);

	// Send HTTP response headers
	char header[HEADER_SIZE];
	snprintf(header, sizeof(header),
			 "HTTP/1.1 200 OK\r\n"
			 "Content-Type: %s\r\n"
			 "Content-Length: %" PRId64 "\r\n\r\n",
			 content_type,
			 (int64_t)file_stat.st_size);
	write(client_socket, header, strlen(header));

	// Send the file content
	while ((read_size = read(file_fd, buffer, BUFFER_SIZE)) > 0)
	{
		if (write(client_socket, buffer, read_size) < 0)
		{
			perror("write");
			close(file_fd);
			close(client_socket);
			return;
		}
	}

	// Check for read errors
	if (read_size < 0)
	{
		perror("read");
	}

	// Close file and socket
	close(file_fd);
	close(client_socket);
}

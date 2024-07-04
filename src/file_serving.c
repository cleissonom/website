#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>
#include <sys/stat.h>
#include <inttypes.h>
#include "file_serving.h"

#define BUFFER_SIZE 16384

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

	// Send HTTP response headers
	char header[256];
	snprintf(header, sizeof(header), "HTTP/1.1 200 OK\r\nContent-Length: %" PRId64 "\r\n\r\n", (int64_t)file_stat.st_size);
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

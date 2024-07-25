#include "server.h"
#include "post_handler.h"
#include "request.h"
#include "task_queue.h"
#include "thread_pool.h"
#include <netinet/in.h>
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <unistd.h>

#define THREAD_POOL_SIZE 5

extern task_queue_t task_queue;

void start_server(int port) {
  int server_fd;
  struct sockaddr_in address;
  int opt = 1;
  int addrlen = sizeof(address);

  if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
    perror("socket failed");
    exit(EXIT_FAILURE);
  }

  if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt))) {
    perror("setsockopt failed");
    exit(EXIT_FAILURE);
  }

  address.sin_family = AF_INET;
  address.sin_addr.s_addr = INADDR_ANY;
  address.sin_port = htons(port);

  if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
    perror("bind failed");
    exit(EXIT_FAILURE);
  }

  if (listen(server_fd, 10) < 0) {
    perror("listen failed");
    exit(EXIT_FAILURE);
  }

  printf("Server listening on port %d\n", port);

  init_task_queue(&task_queue, 1000);
  init_thread_pool(THREAD_POOL_SIZE);

  int new_socket;
  while (1) {
    if ((new_socket = accept(server_fd, (struct sockaddr *)&address,
                             (socklen_t *)&addrlen)) < 0) {
      perror("accept failed");
      exit(EXIT_FAILURE);
    }
    add_task(&task_queue, new_socket);
  }

  destroy_task_queue(&task_queue);
  destroy_thread_pool();
}

void handle_post_request(int client_socket, const char *path,
                         const char *body) {
  if (strcmp(path, "/set-lang") == 0) {
    handle_set_lang(client_socket, body);
  } else {
    const char *not_found =
        "HTTP/1.1 404 Not Found\r\nContent-Length: 13\r\n\r\n404 Not Found";
    write(client_socket, not_found, strlen(not_found));
    close(client_socket);
  }
}
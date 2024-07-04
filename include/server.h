#ifndef SERVER_H
#define SERVER_H

void start_server(int port);
void handle_post_request(int client_socket, const char *path, const char *body);

#endif

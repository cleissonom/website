#include <stdio.h>

#include "hashtable.h"
#include "post_handler.h"
#include "server.h"
#include "signal_handler.h"
#include "task_queue.h"
#include "thread_pool.h"

#define PORT 8080

task_queue_t task_queue;
HashTable *routes;
HashTable *post_routes;

void init_routes(HashTable *routes) {
  ht_insert(routes, "/", 1);
  ht_insert(routes, "/about", 1);
  ht_insert(routes, "/experience", 1);
  ht_insert(routes, "/resume.pdf", 1);
  ht_insert(routes, "/icon-light.svg", 1);
  ht_insert(routes, "/icon-dark.svg", 1);
  ht_insert(routes, "/robots.txt", 1);
  ht_insert(routes, "/script.js", 1);
  ht_insert(routes, "/VcrOsdMono.ttf", 1);
  ht_insert(routes, "/style.css", 1);
}

void init_post_routes(HashTable *post_routes) {
  ht_insert(post_routes, "/set-lang", 1);
}

int main() {
  routes = create_table();
  init_routes(routes);

  post_routes = create_table();
  init_post_routes(post_routes);

  setup_signal_handling();
  start_server(PORT);

  free_table(routes);
  free_table(post_routes);
  return 0;
}

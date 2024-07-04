#ifndef TASK_QUEUE_H
#define TASK_QUEUE_H

#include <pthread.h>

typedef struct {
    int *sockets;
    int max_sockets;
    int count;
    pthread_mutex_t mutex;
    pthread_cond_t cond;
} task_queue_t;

void init_task_queue(task_queue_t *queue, int max_sockets);
void destroy_task_queue(task_queue_t *queue);
void add_task(task_queue_t *queue, int socket);
int get_task(task_queue_t *queue);

#endif

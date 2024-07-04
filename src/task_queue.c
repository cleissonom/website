#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include "task_queue.h"

void init_task_queue(task_queue_t *queue, int max_sockets)
{
	queue->sockets = malloc(sizeof(int) * max_sockets);
	queue->max_sockets = max_sockets;
	queue->count = 0;
	pthread_mutex_init(&queue->mutex, NULL);
	pthread_cond_init(&queue->cond, NULL);
}

void destroy_task_queue(task_queue_t *queue)
{
	free(queue->sockets);
	pthread_mutex_destroy(&queue->mutex);
	pthread_cond_destroy(&queue->cond);
}

void add_task(task_queue_t *queue, int socket)
{
	pthread_mutex_lock(&queue->mutex);
	if (queue->count < queue->max_sockets)
	{
		queue->sockets[queue->count++] = socket;
		pthread_cond_signal(&queue->cond);
	}
	else
	{
		close(socket);
	}
	pthread_mutex_unlock(&queue->mutex);
}

int get_task(task_queue_t *queue)
{
	pthread_mutex_lock(&queue->mutex);
	while (queue->count == 0)
	{
		pthread_cond_wait(&queue->cond, &queue->mutex);
	}
	int socket = queue->sockets[--queue->count];
	pthread_mutex_unlock(&queue->mutex);
	return socket;
}

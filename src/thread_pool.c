#include <pthread.h>
#include <stdlib.h>
#include <stdio.h>
#include "thread_pool.h"
#include "task_queue.h"
#include "request.h"

extern task_queue_t task_queue;
pthread_t *thread_pool;
int thread_pool_size;

void *thread_function(void *arg)
{
	while (1)
	{
		int client_socket = get_task(&task_queue);
		handle_request(client_socket);
	}
	return NULL;
}

void init_thread_pool(int size)
{
	thread_pool_size = size;
	thread_pool = malloc(sizeof(pthread_t) * thread_pool_size);
	for (int i = 0; i < thread_pool_size; ++i)
	{
		if (pthread_create(&thread_pool[i], NULL, thread_function, NULL) != 0)
		{
			perror("pthread_create failed");
			exit(EXIT_FAILURE);
		}
	}
}

void destroy_thread_pool()
{
	for (int i = 0; i < thread_pool_size; ++i)
	{
		pthread_cancel(thread_pool[i]);
	}
	free(thread_pool);
}

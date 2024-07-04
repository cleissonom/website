#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include "signal_handler.h"
#include "task_queue.h"
#include "thread_pool.h"

extern task_queue_t task_queue;

void handle_signal(int signal)
{
	printf("Shutting down server...\n");
	destroy_task_queue(&task_queue);
	destroy_thread_pool();
	exit(0);
}

void setup_signal_handling(void)
{
	signal(SIGINT, handle_signal);
	signal(SIGTERM, handle_signal);
}

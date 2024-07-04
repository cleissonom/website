CC = gcc
CFLAGS = -Wall -pthread -Iinclude
SRC = src/main.c src/server.c src/request.c src/file_serving.c src/task_queue.c src/thread_pool.c src/signal_handler.c src/hashtable.c src/post_handler.c
OBJ = $(SRC:.c=.o)
TARGET = server

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CC) $(CFLAGS) -o $@ $^

clean:
	rm -f $(OBJ) $(TARGET)

.PHONY: all clean

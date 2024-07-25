CC = clang
CFLAGS = -Wall -pthread -Iinclude --std=c2x -DNDEBUG
CFLAGS_DEBUG = -Wall -pthread -Iinclude --std=c2x -fsanitize=address -g
SRC = $(wildcard src/*.c)
OBJ = $(SRC:.c=.o)
TARGET = build/server
SCAN_BUILD_DIR_PATH = /opt/homebrew/Cellar/llvm/18.1.8/bin

all: build_dir build_html build_static $(TARGET) post_build

$(TARGET): $(OBJ)
	@$(CC) $(CFLAGS) -o $@ $^

build_debug:
	@$(CC) $(CFLAGS_DEBUG) -o $(TARGET) $(SRC)

build_dir:
	@mkdir -p build

build_html:
	@./scripts/build_html.sh

build_static:
	@./scripts/build_static.sh

post_build:
	@rm -f $(OBJ)

clean:
	@rm -f $(OBJ) $(TARGET)
	@rm -rf build/
	@rm -f cppcheck_errors.txt scan-build_errors.txt

cppcheck:
	@cppcheck --enable=all --inconclusive --std=c2x --suppress=missingIncludeSystem --check-level=exhaustive --force -I include/ src/ 2> cppcheck_errors.txt

scan-build:
	@$(SCAN_BUILD_DIR_PATH)/scan-build make 2> scan-build_errors.txt

check: cppcheck scan-build

.PHONY: all clean cppcheck scan-build check build_dir build_html build_static post_build

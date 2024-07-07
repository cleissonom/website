#!/bin/bash

command -v curl >/dev/null 2>&1 || { echo >&2 "curl is required but it's not installed.  Aborting."; exit 1; }
command -v rsync >/dev/null 2>&1 || { echo >&2 "rsync is required but it's not installed.  Aborting."; exit 1; }


SOURCE_DIR="static"
TARGET_DIR="build"
API_URL="https://htmlcompressor.com/compress"

copy_all_files() {
    if [[ ! -d "$SOURCE_DIR" ]]; then
        echo "Source directory '$SOURCE_DIR' does not exist."
        return 1
    fi

    mkdir -p "$TARGET_DIR" || {
        echo "Failed to create target directory '$TARGET_DIR'."
        return 1
    }

    rsync -av --include '*/' --exclude '*.js' --exclude '*.css' "$SOURCE_DIR"/ "$TARGET_DIR"/$SOURCE_DIR/ || {
        echo "Failed to copy files from '$SOURCE_DIR' to '$TARGET_DIR'."
        return 1
    }

    echo "All files copied successfully from '$SOURCE_DIR' to '$TARGET_DIR'."
}

compress_file() {
    local file=$1

    local relative_path="${file#$SOURCE_DIR/}"
    local target_file="$TARGET_DIR/$SOURCE_DIR/$relative_path"

    local response
    response=$(curl -s --request POST "$API_URL" --data-urlencode "code@$file") || {
        echo "Error compressing file: $file"
        return 1
    }

    echo "$response" > "$target_file"
}

compress_files() {
    local -a types=('*.js' '*.css')

    for type in "${types[@]}"; do
        find "$SOURCE_DIR" -type f -name "$type" | while read -r file; do
            compress_file "$file" || continue
        done
    done
}

main() {
    copy_all_files && compress_files
}

main

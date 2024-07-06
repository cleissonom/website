#!/bin/bash

SOURCE_DIR="static"
TARGET_DIR="build"
API_URL="https://htmlcompressor.com/compress"

copy_all_files() {
    if [[ ! -d "$SOURCE_DIR" ]]; then
        printf "Source directory '%s' does not exist.\n" "$SOURCE_DIR" >&2
        return 1
    fi

    if ! mkdir -p "$TARGET_DIR"; then
        printf "Failed to create destination directory '%s'.\n" "$TARGET_DIR" >&2
        return 1
    fi

    if ! rsync -av --include '*/' --exclude '*.js' --exclude '*.css' "$SOURCE_DIR"/ "$TARGET_DIR"/$SOURCE_DIR/; then
        printf "Failed to copy files from '%s' to '%s'.\n" "$SOURCE_DIR" "$TARGET_DIR" >&2
        return 1
    fi

    printf "All files copied successfully from '%s' to '%s'.\n" "$SOURCE_DIR" "$TARGET_DIR"
}

compress_files() {
    local src_dir=$1
    local tgt_dir=$2
    
    find "$src_dir" -type f -name "*.js" | while read -r file; do
        local relative_path="${file#$src_dir/}"
        local target_file="$tgt_dir/$src_dir/$relative_path"
        
        local response
        if ! response=$(curl -s --request POST "$API_URL" \
            --data-urlencode "code@$file"); then
            printf "Error compressing file: %s\n" "$file" >&2
            continue
        fi
        
        printf "%s" "$response" > "$target_file"
    done

    find "$src_dir" -type f -name "*.css" | while read -r file; do
        local relative_path="${file#$src_dir/}"
        local target_file="$tgt_dir/$src_dir/$relative_path"
        
        local response
        if ! response=$(curl -s --request POST "$API_URL" \
            --data-urlencode "code@$file"); then
            printf "Error compressing file: %s\n" "$file" >&2
            continue
        fi
        
        printf "%s" "$response" > "$target_file"
    done
}

main() {
	copy_all_files
    compress_files "$SOURCE_DIR" "$TARGET_DIR"
}

main

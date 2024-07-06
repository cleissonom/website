#!/bin/bash

SOURCE_DIR="pages"
TARGET_DIR="build"
API_URL="https://htmlcompressor.com/compress"

create_directory_structure() {
    local src_dir=$1
    local tgt_dir=$2
    find "$src_dir" -type d -exec mkdir -p "$tgt_dir/{}" \;
}

compress_html_files() {
    local src_dir=$1
    local tgt_dir=$2
    
    find "$src_dir" -type f -name "*.html" | while read -r file; do
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
    create_directory_structure "$SOURCE_DIR" "$TARGET_DIR"
    compress_html_files "$SOURCE_DIR" "$TARGET_DIR"
}

main

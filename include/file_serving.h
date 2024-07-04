#ifndef FILE_SERVING_H
#define FILE_SERVING_H

typedef struct
{
	const char *extension;
	const char *mime_type;
} mime_map_t;

static mime_map_t mime_map[] = {
	{".html", "text/html"},
	{".css", "text/css"},
	{".js", "application/javascript"},
	{".png", "image/png"},
	{".jpg", "image/jpeg"},
	{".jpeg", "image/jpeg"},
	{".gif", "image/gif"},
	{".svg", "image/svg+xml"},
	{".ico", "image/x-icon"},
	{".txt", "text/plain"},
	{".pdf", "application/pdf"},
	{".webp", "image/webp"},
	{".mp4", "video/mp4"},
	{".webm", "video/webm"},
	{".ogg", "audio/ogg"},
	{".mp3", "audio/mpeg"},
	{".wav", "audio/wav"},
	{".flac", "audio/flac"},
	{".aac", "audio/aac"},
	{".wma", "audio/x-ms-wma"},
	{".m4a", "audio/mp4"},
	{".opus", "audio/opus"},
	{".flv", "video/x-flv"},
	{".avi", "video/x-msvideo"},
	{".mov", "video/quicktime"},
	{".wmv", "video/x-ms-wmv"},
	{".mkv", "video/x-matroska"},
	{".mpg", "video/mpeg"},
	{".mpeg", "video/mpeg"},
	{".m4v", "video/mp4"},
	{".3gp", "video/3gpp"},
	{".3g2", "video/3gpp2"},
	{".srt", "application/x-subrip"},
	{".vtt", "text/vtt"},
	{".doc", "application/msword"},
	{".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
	{".xls", "application/vnd.ms-excel"},
	{".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
	{".ppt", "application/vnd.ms-powerpoint"},
	{".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"},
	{".json", "application/json"},
	{".xml", "application/xml"},
	{".csv", "text/csv"},
	{".zip", "application/zip"},
	{".tar", "application/x-tar"},
	{".gz", "application/gzip"},
	{".rar", "application/vnd.rar"},
	{".7z", "application/x-7z-compressed"},
	{".otf", "font/otf"},
	{".ttf", "font/ttf"},
	{".woff", "font/woff"},
	{".woff2", "font/woff2"}};

const char *get_mime_type(const char *path);
int is_static_file(const char *path);

void serve_file(int client_socket, const char *path);

#endif

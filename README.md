# Personal Website
This project implements a personal website server in C.

## Features

- Serve static files (HTML, CSS, JS, images) from `pages` and `static` directories.
- Support for GET and POST HTTP methods.
- Multi-threaded request handling using a thread pool.
- Task queue to manage incoming connections.
- Hash table implementation for mapping valid routes.
- Example POST endpoint `/set-lang` to set a language preference in cookies.
- Internationalization support for English and Portuguese.

## TODO:
- Create get_handler
- Improve i18n, add more languages
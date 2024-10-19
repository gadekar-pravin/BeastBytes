# Animal Selector and File Uploader

This is a FastAPI-based web application that allows users to select an animal (cat, dog, or elephant) and upload a file. The application displays the selected animal's image and provides information about the uploaded file.

## Features

- Select an animal (cat, dog, or elephant) and view its image
- Upload a file and view its details (name, size, and type)
- FastAPI backend with HTML/CSS/JS frontend

## Setup and Running

1. Clone the repository
2. Install dependencies: `pip install fastapi uvicorn jinja2 python-multipart`
3. Run the application: `python main.py`
4. Open a web browser and navigate to `http://localhost:8000`

## Project Structure

- `main.py`: FastAPI application
- `templates/index.html`: HTML template
- `static/styles.css`: CSS styles
- `static/script.js`: JavaScript for frontend interactivity
- `static/images/`: Contains animal images (cat.jpg, dog.jpg, elephant.jpg)

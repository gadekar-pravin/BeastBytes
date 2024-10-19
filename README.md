# Animal Selector and File Uploader

This is a FastAPI-based web application that allows users to select an animal (cat, dog, or elephant) and upload a file. The application displays the selected animal's image and provides information about the uploaded file.

## Features

- Select an animal (cat, dog, or elephant) and view its image
- Upload a file and view its details (name, size, and type)
- FastAPI backend with HTML/CSS/JS frontend
- Animated gradient background
- Responsive design
- Custom fonts for improved visual appeal

## Setup and Running

1. Clone the repository
2. Install dependencies: `pip install fastapi uvicorn jinja2 python-multipart`
3. Ensure you have the required static files:
   - Animal images in `static/images/` (cat.jpg, dog.jpg, elephant.jpg)
   - `static/styles.css` for custom styles
   - `static/script.js` for frontend functionality
4. Run the application: `python main.py`
5. Open a web browser and navigate to `http://localhost:8000`

## Project Structure

- `main.py`: FastAPI application
- `templates/index.html`: HTML template with custom fonts and Font Awesome integration
- `static/styles.css`: CSS styles including animated gradient background and responsive design
- `static/script.js`: JavaScript for frontend interactivity and file upload handling
- `static/images/`: Contains animal images (cat.jpg, dog.jpg, elephant.jpg)

## Recent Changes

1. Updated the frontend to use a single button for file selection and upload
2. Implemented an animated gradient background
3. Added custom fonts (Fredoka One for headings, Comfortaa for body text) for improved visual appeal
4. Enhanced the file information display with better formatting and human-readable file sizes
5. Improved overall responsive design and hover effects

## Usage

1. Select an animal by clicking on one of the radio buttons
2. Click the "Choose File and Upload" button to select and upload a file
3. The selected animal's image will be displayed, and upon successful file upload, the file information will be shown

## Note

Make sure to update the animal images in the `static/images/` directory with appropriate `.jpg` files for cat, dog, and elephant.

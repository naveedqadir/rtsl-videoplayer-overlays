# rtsl-videoplayer-overlays
 A Full stack app with flask, react and tailwind css,ui for rtsl videoplayer with customoverlays

# Video Player Project

This is a Video Player project with a client-server architecture built using Flask on the server-side and Tailwind CSS with Vite on the client-side.

## Folder Structure

```
video-player/
|-- client/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   |-- pages/
|   |   |   |-- Home.vue   # Landing page with live stream
|   |   |   |-- App.vue    # Video URL input and viewing
|   |   |   |-- OverlaySettings.vue  # CRUD API for Overlays and Settings
|   |   |-- routes/
|   |   |-- App.vue
|   |   |-- main.js
|   |-- package.json
|   |-- vite.config.js
|-- server/
|   |-- app.py
|   |-- .env
|   |-- requirements.txt
|   |-- venv/
|-- .gitignore
|-- README.md
```

### Server

- `server/app.py`: The Flask application file containing the server-side code.
- `server/.env`: Configuration file for environment variables.
- `server/requirements.txt`: A list of Python packages required for the server. Install these using `pip install -r requirements.txt`.
- `server/p1/`: Virtual environment folder for isolating project dependencies.

### Client

- `client/src/`: Source code for the client-side application.
- `client/package.json`: Node.js package configuration.
- `client/vite.config.js`: Vite configuration.
- `client/src/assets/`: Static assets like images and fonts.
- `client/src/components/`: Reusable Vue components.
- `client/src/pages/`: Vue.js single-file components representing different pages.
- `client/src/routes/`: Configuration for client-side routing.
- `client/src/App.vue`: The root Vue component.
- `client/src/main.js`: Entry point for the client application.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Python](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. **Server Dependencies**:
   - Navigate to the `server` directory: `cd server`
   - Create and activate a virtual environment:
     ```
     python -m venv p1
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     or python -m virtualenv p1
     ```
   - Install Python dependencies: `pip install -r requirements.txt`

2. **Client Dependencies**:
   - Navigate to the `client` directory: `cd client`
   - Install Node.js dependencies: `npm install`

## Usage

1. **Server**:
   - In the `server` directory, start the Flask application: `python app.py`

2. **Client**:
   - In the `client` directory, start the Vite development server: `npm run dev`

Visit `http://localhost:3000` in your web browser to access the client application.

### Project Routes and Functionality

- `/home` (Landing Page):
  - Visitors to the app can view a livestream video played from an RTSP URL.
  - The video is embedded on the landing page, and users can click "Play" to start watching the livestream.

- `/app`:
  - Users can enter a URL to view a video.
  - Users can also access overlay settings.

- `/overlaysetting` (CRUD API for Overlays and Settings):
  - **Create**: Users can create and save custom overlay settings, including position, size, and content.
  - **Read**: Users can retrieve their saved overlay settings.
  - **Update**: Users can modify existing overlay settings.
  - **Delete**: Users can delete saved overlay settings.

### Overlay Positioning and Font Size

In the project's codebase, we use the following CSS properties to control the positioning and font size of overlay elements. These properties are typically applied to HTML elements using JavaScript or CSS classes.

- **Left Position** (`left`):
  - Type: String (CSS value)
  - Range: Any valid CSS length value (e.g., `px`, `em`, `rem`, `%`)
  - Description: To horizontally center the overlay element, we use the `calc` function with the `positionX` property, subtracting `2rem`. This centers the element relative to its container.

- **Top Position** (`top`):
  - Type: String (CSS value)
  - Range: Any valid CSS length value (e.g., `px`, `em`, `rem`, `%`)
  - Description: To vertically center the overlay element, we use the `calc` function with the `positionY` property, subtracting `2rem`. This centers the element relative to its container.

- **Font Size** (`fontSize`):
  - Type: String (CSS value)
  - Range: Any valid CSS font size value (e.g., `px`, `em`, `rem`, `%`)
  - Description: The `fontSize` property controls the font size of the overlay element and is set based on the `size` property.

Here's an example of how these properties are applied in JavaScript:

```javascript
const shownOverlay = {
  left: `calc(${shownOverlay.positionX} - 2rem)`, // Center horizontally
  top: `calc(${shownOverlay.positionY} - 2rem)`, // Center vertically
  fontSize: `${shownOverlay.size}`,
};


## Additional Notes

- This project uses Flask for the server, Vite for the client, and integrates Tailwind CSS for styling.
- The server-side dependencies are listed in `server/requirements.txt`.
- The client-side dependencies are listed in `client/package.json`.
- Customize and extend the client and server code as needed for your specific video player application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README further to include more details or specific instructions for your project.

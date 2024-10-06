# Meet Link Opener

## Overview

Meet Link Opener is a project designed to seamlessly open Google Meet or Whereby links using a browser extension and a WebSocket server. The project is implemented using a combination of Python, and JavaScript, and it demonstrates an integration of backend WebSocket services with frontend browser extensions.

## Complexities

### WebSocket Communication
- **Challenge:** Ensuring real-time communication between the browser extension and the WebSocket server.
- **Solution:** Utilized FastAPI to create a robust WebSocket server that handles multiple client connections and broadcasts messages efficiently.

### Cross-Origin Resource Sharing (CORS)
- **Challenge:** Handling CORS issues to allow the extension to communicate with the WebSocket server without restrictions.
- **Solution:** Implemented the CORS middleware in FastAPI to allow all origins, methods, and headers, ensuring seamless communication.

### Browser Extension Development
- **Challenge:** Developing a browser extension that interacts with both the background script and the content script effectively.
- **Solution:** Structured the extension to include a background script for persistent WebSocket connections and content scripts to interact with web pages. The popup interface allows user interaction to trigger WebSocket events.

## Challenges and Solutions

### Challenge 1: Real-time Message Handling
- **Problem:** Ensuring the WebSocket server can handle and broadcast messages to all connected clients without significant delays.
- **Solution:** Implemented an efficient message handling loop in FastAPI that broadcasts received messages to all connected WebSocket clients.

### Challenge 2: Ensuring Extension Compatibility
- **Problem:** Making sure the extension works across different browsers and handles various user interactions.
- **Solution:** Followed the WebExtensions API standards and tested the extension on multiple browsers to ensure compatibility. Added event listeners for button clicks and keyboard shortcuts for better accessibility.

### Challenge 3: Robust Error Handling
- **Problem:** Handling disconnections and errors gracefully in the WebSocket server.
- **Solution:** Added error handling and cleanup mechanisms in the WebSocket server to remove disconnected clients and maintain a stable connection pool.

## Getting Started

### Prerequisites
- Python 3.8+
- FastAPI
- Chrome or any Chromium-based browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/faisal-fida/LinkOpen.git
   cd LinkOpen
   ```

2. Install the required Python packages:
   ```bash
   pip install fastapi uvicorn
   ```

3. Run the WebSocket server:
   ```bash
   uvicorn Server.main:app --reload
   ```

4. Load the extension in your browser:
   - Open the Extensions page (chrome://extensions/).
   - Enable Developer mode.
   - Click "Load unpacked" and select the `Extension` directory.

## Usage

1. Start the WebSocket server by running the command mentioned above.
2. Open the browser extension popup and click the "Open Meet Link" button to trigger the WebSocket message.
3. The extension will open a new tab with the specified Meet or Whereby link upon receiving the "openMeet" message.

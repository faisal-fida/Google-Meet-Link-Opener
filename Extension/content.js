// WebSocket connection
const socket = new WebSocket('ws://localhost:8000/ws');

// Function to send a message to the WebSocket server
function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    }
}

// Content script to listen for messages from the WebSocket server
socket.addEventListener('message', (event) => {
    if (event.data === "openMeet") {
        // Open whereby.com/faisal-fida in a new tab
        window.open("https://whereby.com/faisal-fida", "_blank");
    }
});

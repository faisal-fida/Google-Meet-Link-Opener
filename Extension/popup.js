function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    }
}

const socket = new WebSocket('ws://localhost:8000/ws');

// Send a message to the background.js script to open a new tab

// When the "Open Meet" button is clicked, send a message to the background.js script
document.getElementById('openMeetBtn').addEventListener('click', () => {
    sendMessage("openMeet");
});

// When the shortcut key is pressed, send a message to the background.js script
chrome.commands.onCommand.addListener((command) => {
    if (command === "open_meet") {
        sendMessage("openMeet");
    }
});

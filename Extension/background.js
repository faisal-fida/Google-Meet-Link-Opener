const socket = new WebSocket('ws://localhost:8000/ws');

function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    }
}

socket.addEventListener('message', (event) => {
    if (event.data === "openMeet") {
        chrome.tabs.create({ url: "meet.google.com/hyuads6a" });
        
    }
});

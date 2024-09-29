const http = require("http");
const express = require("express");
const path = require('path');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

// Serve static files from the 'public' folder
app.use(express.static(path.resolve(__dirname, 'public')));

// Use the PORT provided by Render, or default to port 9000 for local development
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Handle WebSocket connection
io.on("connection", (socket) => {
    
    // Listen for 'message_user' event and broadcast message with server ID
    socket.on("message_user", (data) => {
        const { name, message, time } = data;
        io.emit("message", { name, message, time }); // Broadcast to all clients
        console.log(`${name} sent a message: ${message} at ${time}`);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

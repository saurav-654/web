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

let activeUsers = {};

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Handle WebSocket connection
io.on("connection", (socket) => {
    console.log("A user connected");

    // When a new user joins
    socket.on("new_user", (name) => {
        activeUsers[socket.id] = name; // Add the user to the active list
        io.emit("user_connected", { name, users: Object.values(activeUsers) });
        console.log(`${name} joined the chat`);
    });

    // Handle message broadcasting
    socket.on("message_user", (data) => {
        const { name, message, time } = data;
        io.emit("message", { name, message, time });
        console.log(`${name} sent a message: ${message} at ${time}`);
    });

    // Handle user disconnection
    socket.on("disconnect", () => {
        const name = activeUsers[socket.id];
        delete activeUsers[socket.id]; // Remove user from active list
        io.emit("user_disconnected", { name, users: Object.values(activeUsers) });
        console.log(`${name} disconnected`);
    });
});

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

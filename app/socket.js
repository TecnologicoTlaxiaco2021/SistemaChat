import app from "./config.js";
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const socket = new Server(server);

// Socket event
socket.on('connection', (s) => {
    // Chat event
    s.on('chat message', (msg, userID, name) => {
        // Send data to another user
        s.broadcast.emit('chat message', msg, "left", name ? name : "User" + userID);

        // Send data to current user
        s.emit('chat message', msg, "right", "Me");
    });
});

export default server;
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const port = process.env.PORT || 10000;

app.use(cors({ origin: "*" })); // For testing; restrict in production

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Or your frontend domain
    methods: ["GET", "POST"]
  },
});

// (Your socket.io code here...)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

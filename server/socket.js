const { createServer } = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("Someone connect with id:", socket.id);
});

module.exports = httpServer;

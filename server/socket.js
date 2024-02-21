const { createServer } = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const httpServer = createServer(app);
const { Post, User } = require("./models");

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const getPostData = async () => {
  try {
    const post = await Post.findAll({
      include: {
        model: User,
      },
      order: [["updatedAt", "desc"]],
    });
    return post;
  } catch (error) {
    console.log(error);
  }
};

io.on("connection", (socket) => {
  console.log("Someone connect with id:", socket.id);

  socket.on("post:info", async (message) => {
    if (message) {
      const posts = await getPostData();
      console.log(posts, "<<<<<<<<<<<<");
      socket.broadcast.emit("post:update", posts);
    }
  });
});

module.exports = httpServer;

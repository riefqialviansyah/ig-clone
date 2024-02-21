const { createServer } = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const httpServer = createServer(app);
const { Post, User, Coment } = require("./models");
const { verifyToken } = require("./helpers/token");

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

const addComent = async ({ message, userId, postId }) => {
  try {
    await Coment.create({ message, userId, postId });
  } catch (error) {
    console.log(error);
  }
};

const getComents = async () => {
  try {
    const coments = await Coment.findAll({
      include: {
        model: User,
      },
    });
    return coments;
  } catch (error) {
    console.log(error);
  }
};

io.on("connection", (socket) => {
  console.log("Someone connect with id:", socket.id);

  socket.on("post:info", async (message) => {
    if (message == "Success create post") {
      const posts = await getPostData();
      socket.broadcast.emit("post:update", posts);
    }
  });

  // socket untuk setiap postingan
  socket.on("coment:send", async (data) => {
    if (data.access_token) {
      const { id } = verifyToken(data.access_token);
      await addComent({
        message: data.message,
        userId: id,
        postId: data.postId,
      });
    }

    const coments = await getComents();
    io.emit("coment:update", coments);
  });
});

module.exports = httpServer;

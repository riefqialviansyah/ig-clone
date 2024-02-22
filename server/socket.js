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
      order: [["createdAt", "desc"]],
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
      order: [["createdAt", "asc"]],
    });
    return coments;
  } catch (error) {
    console.log(error);
  }
};

let DB = {
  lastCount: 0,
  onlineUser: [],
};

io.on("connection", (socket) => {
  if (socket.handshake.auth.username) {
    DB.onlineUser.push({
      socketId: socket.id,
      username: socket.handshake.auth.username,
    });
  }
  console.log(DB.onlineUser);
  io.emit("users:online", DB.onlineUser);

  socket.on("post-info", async (message) => {
    if (message == "Success create post") {
      const posts = await getPostData();
      socket.broadcast.emit("post-update", posts);
    }
  });

  socket.on("post-likes", async (message) => {
    if (message == "Success like post") {
      const posts = await getPostData();
      console.log(posts, "<<<<<<<");
      io.emit("post:update-likes", posts);
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

  socket.on("disconnect", () => {
    DB.onlineUser = DB.onlineUser.filter((el) => {
      if (el.socketId == socket.id) {
        console.log(`${el.username} disconnected`);
      }
      return el.socketId != socket.id;
    });
    io.emit("users:online", DB.onlineUser);
    console.log(DB.onlineUser);
  });
});

module.exports = httpServer;

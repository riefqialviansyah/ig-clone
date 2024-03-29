const express = require("express");
const router = express.Router();

// import controller
const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");
const PostController = require("../controllers/PostController");
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
});

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to KOPI (Kumpulan Orang Paling Imut) API",
    description: "This is web api for group project Hactiv8 RMT45 Phase2",
  });
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);

// file authentication nanti diisi untuk cek apakah loginnya valid atau nggak
router.use(authentication);

router.post("/post", PostController.create);
router.get("/post", PostController.showAllPost);
router.patch(
  "/post/cover-url",
  upload.single("image"),
  PostController.updatePostCoverUrlById
);
router.get("/post/coment/:postId", PostController.getComentByPostId);
router.get("/post/likes/:postId", PostController.addLike);

// buat routingan sisanya untuk like, comment, gett all post, get all coment by PostId

module.exports = router;

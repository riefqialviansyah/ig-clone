const { Post } = require("../models/index");
const cloudinary = require("../utils/cloudinary");

class PostController {
  static async create(req, res, next) {
    const { userId, imageUrl, likes, description } = req.body;

    try {
      const cloudinaryResult = await cloudinary.uploader.upload(imageUrl, {
        folder: "posts",
        // width: 300,
        // crop: 'scale'
      });

      const { secure_url: cloudinaryImageUrl } = cloudinaryResult;

      const newPost = await Post.create({
        userId,
        imageUrl: cloudinaryImageUrl,
        likes,
        description,
      });

      res.status(201).json({ success: true, post: newPost });
    } catch (error) {
      next(error);
    }
  }
  static async showAllPost(req, res, next) {
    try {
      const post = await Post.findAll({});
      res
        .status(200)
        .json({ message: "Success Get Data All Post", data: post });
    } catch (error) {
      next(error);
    }
  }

  static async updatePostCoverUrlById(req, res, next) {
    try {
      const postId = req.params.id;

      const post = await Post.findByPk(postId);
      if (!post) {
        return res
          .status(404)
          .json({ message: `Post id ${postId} not found` });
      }

      if (!req.file) {
        return res.status(400).json({ message: "File is required" });
      }
      const base64Image = req.file.buffer.toString("base64");
      const base64URL = `data:${req.file.mimetype};base64,${base64Image}`;

      const originalFileName = req.file.originalname;
      const fileNameWithoutExtension = originalFileName
        .split(".")
        .slice(0, -1)
        .join(".");

      const result = await cloudinary.uploader.upload(base64URL, {
        public_id: fileNameWithoutExtension,
      });

      await post.update({ coverUrl: result.secure_url });
      console.log(result);

      res.status(200).json({
        message: "Image successfully updated",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PostController;

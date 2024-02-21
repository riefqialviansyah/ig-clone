const { Post } = require("../models/index");
const cloudinary = require("../utils/cloudinary");

class PostController {
  static async create(req, res, next) {
    const userId = req.user.id;
    const { imageUrl, description } = req.body;

    try {
      await Post.create({
        userId,
        imageUrl,
        description,
      });

      res.status(201).json({ success: "Success to create post" });
    } catch (error) {
      next(error);
    }
  }

  static async showAllPost(req, res, next) {
    try {
      const post = await Post.findAll({});
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  static async updatePostCoverUrlById(req, res, next) {
    try {
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

      res.status(200).json({
        cover_url: result.secure_url,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PostController;

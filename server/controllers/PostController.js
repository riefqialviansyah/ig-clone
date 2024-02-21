const { Post, sequelize } = require("../models/index");
const { post } = require("../routes");
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
}

module.exports = PostController;

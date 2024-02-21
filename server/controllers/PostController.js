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
}

module.exports = PostController;

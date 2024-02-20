class PostController {
  static async create(req, res, next) {
    try {
      res.status(201).json({ message: "Post has been created" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;

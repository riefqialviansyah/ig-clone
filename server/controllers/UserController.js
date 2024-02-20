class UserController {
  static async register(req, res, next) {
    try {
      res.status(201).json({ username: "username", email: "email" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      res.status(200).json({ access_token: "token" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;

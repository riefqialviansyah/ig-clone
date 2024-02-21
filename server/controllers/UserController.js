const { comparePassword } = require("../helpers/hash");
const { signToken } = require("../helpers/token");
const { User, sequelize } = require("../models/index");

class UserController {
  static async register(req, res, next) {
    try {
      await User.create(req.body);
      res.status(201).json({ message: "User has been created" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "EmailRequired" };
      }
      if (!password) {
        throw { name: "PassRequired" };
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "Invalid User" };
      }
      const decodedPassword = comparePassword(password, user.password);
      if (!decodedPassword) {
        throw { name: "Invalid User" };
      }
      const access_token = signToken({ id: user.id });

      res.status(200).json({ message: "succes login ", access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;

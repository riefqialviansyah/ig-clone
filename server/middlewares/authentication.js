const { User } = require("../models");
const { Post } = require("../models/index");
const { verifyToken } = require("../helpers/token");

const authentication = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) throw { name: "InvalidToken" };
  
      const [type, token] = authorization.split(" ");
      if (type !== "Bearer") throw { name: "InvalidToken" };
  
      const decodedToken = verifyToken(token);
      const user = await User.findByPk(decodedToken.id);
      if (!user) throw { name: "InvalidToken" };
  
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  };

module.exports = authentication;

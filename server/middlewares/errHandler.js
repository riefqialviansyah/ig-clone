const errHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "EmailRequired":
      res.status(400).json({ message: "Email is required" });
      break;
    case "PassRequired":
      res.status(400).json({ message: "Password is required" });
      break;
    case "LikesValidation":
      res.status(400).json({ message: err.message });
      break;
    case "Invalid User":
      res.status(401).json({ message: "Invalid email or password" });
    case "InvalidToken":
    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid Token, Please login first" });
      break;
    case "FileIsRequired":
      res.status(400).json({ message: err.message });
      break;
    case "NotFound":
      res.status(404).json({ message: err.message });
      break;
    case "value":
      break;
    default:
      console.log(err.name, "<<<<<< nama error");
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
      break;
  }
};

module.exports = errHandler;

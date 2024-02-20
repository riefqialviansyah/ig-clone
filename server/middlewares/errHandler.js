const errHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
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

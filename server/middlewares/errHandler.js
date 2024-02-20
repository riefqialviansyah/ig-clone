const errHandler = (err, req, res, next) => {
  switch (err.name) {
    // daftarin error disini
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

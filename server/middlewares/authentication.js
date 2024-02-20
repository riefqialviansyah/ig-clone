const authentication = (req, res, next) => {
  try {
    // nanti disini buat authentication agar yagn bisa masuk ke aplikasi cum ayang sudah login
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;

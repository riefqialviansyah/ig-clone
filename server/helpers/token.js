// nanti disini buatin token kalau user sudah login

const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET_KEY;

const signToken = (payload) => {
  return jwt.sign(payload, secret);
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { signToken, verifyToken };

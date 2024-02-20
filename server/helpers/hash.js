// nanti disini buat helpers untuk has password

const bcrypt = require("bcryptjs");

const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, bcrypt.genSaltSync(8));
};
const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = { hashPassword, comparePassword };

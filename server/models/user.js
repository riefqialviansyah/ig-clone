'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: "userId" });
      User.hasMany(models.Like, { foreignKey: "userId" });
      User.hasMany(models.Coment, { foreignKey: "userId" });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Username must be unique",
      },
      validate: {
        notNull: {
          msg: "Username is required",
        },
        notEmpty: {
          msg: "Username is required",
        },
        isUsername: {
          msg: "Invalid Username format",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email must be unique",
        },
        validate: {
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Invalid email format",
          },
        },
      },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Password must be unique",
      },
      validate: {
        notNull: {
          msg: "Password is required",
        },
        notEmpty: {
          msg: "Password is required",
        },
        isPassword: {
          msg: "Invalid Password format",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
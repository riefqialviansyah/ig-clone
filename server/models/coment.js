"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Coment.belongsTo(models.User, { foreignKey: "userId" });
      Coment.belongsTo(models.Post, { foreignKey: "postId" });
    }
  }
  Coment.init(
    {
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "message is required",
          },
          notEmpty: {
            msg: "message is required",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "userId is required",
          },
          notEmpty: {
            msg: "userId is required",
          },
        },
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "postId is required",
          },
          notEmpty: {
            msg: "postId is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Coment",
    }
  );
  return Coment;
};

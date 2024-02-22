"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.User, { foreignKey: "userId" });
      Like.belongsTo(models.Post, { foreignKey: "postId" });
    }
  }
  Like.init(
    {
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
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};

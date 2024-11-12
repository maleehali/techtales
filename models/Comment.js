const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Ensure Sequelize instance is imported

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    sequelize, // Ensure Sequelize instance is passed here
    modelName: 'comment',
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Comment;

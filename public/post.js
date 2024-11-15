// models/Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Ensure this is correct

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize, // Ensure Sequelize instance is passed here
    modelName: 'post',
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Post;

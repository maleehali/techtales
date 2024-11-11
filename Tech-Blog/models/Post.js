const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import Sequelize instance

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
    sequelize, // Pass the Sequelize instance here
    modelName: 'post',
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Post;

console.log("Sequelize instance in Post.js:", sequelize); // Add this for debugging

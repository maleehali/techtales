const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: { /* define columns */ },
    title: { /* define columns */ },
    content: { /* define columns */ }
  },
  { /* options */ }
);

module.exports = Post;

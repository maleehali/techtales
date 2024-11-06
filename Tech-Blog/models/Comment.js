const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: { /* define columns */ },
    comment_text: { /* define columns */ }
  },
  { /* options */ }
);

module.exports = Comment;

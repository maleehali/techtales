const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: { /* define columns */ },
    username: { /* define columns */ },
    password: { /* define columns */ }
  },
  { /* options */ }
);

module.exports = User;

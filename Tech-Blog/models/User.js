const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import Sequelize instance

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, // Pass the Sequelize instance here
    modelName: 'user',
    freezeTableName: true,
    underscored: true
  }
);

module.exports = User;

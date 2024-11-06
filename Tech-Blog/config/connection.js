const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.postgres, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;

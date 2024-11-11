const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       // Should match DB_NAME in .env
  process.env.DB_USER,       // Should match DB_USER in .env
  process.env.DB_PASSWORD,   // Should match DB_PASSWORD in .env
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  }
);

module.exports = sequelize;

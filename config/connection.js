const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       // Should be tech_blog_db
  process.env.DB_USER,       // Supabase user
  process.env.DB_PASSWORD,   // Supabase password
  {
    host: process.env.DB_HOST, // Supabase host
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,          // Supabase requires SSL connections
        rejectUnauthorized: false, // Allows SSL without certificate verification
      },
    },
  }
);

module.exports = sequelize;

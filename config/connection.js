// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection the database, pass in the MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;

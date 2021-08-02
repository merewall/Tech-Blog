// BRING IN SEQUELIZE MODULE AND DOT ENV
const Sequelize = require('sequelize');
require('dotenv').config();

// CONFIGURE CONNECTION AND SEQUELIZE WITH DOTENV VARIABLES
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// EXPORT SEQUELIZE CONNECTION
module.exports = sequelize;
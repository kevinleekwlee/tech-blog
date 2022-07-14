//Setting up sequelize and the .env database credentials. 
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// JAWSDB allows heroku deployment to connect to my sql database. 
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

module.exports = sequelize;

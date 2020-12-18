const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host     : process.env.DB_HOST,
//     port     : 3306,
//     user     : "root",
//     password : "bootcampTS954",
//     database : 'techBlog_db'
//   });


// connection.connect(() => {
//     console.log("connected as ID " + connection.threadId);
// });

// module.exports = connection;
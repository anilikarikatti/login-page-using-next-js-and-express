let mysql = require("mysql2");


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'dummy',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    password:"root"
  });


  module.exports = {pool}
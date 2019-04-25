var mysql = require("mysql");

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123'
});
module.exports={con}

exports.mySQLConnect=con.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

mysql.mySQLConnect;
let createdb = `create database if not exists LCTDB`;
let usedb = `use LCTDB`;
con.query(createdb);
con.query(usedb);


// exports.mySQLDisconnect=con.end(function (err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
//   });
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
require("dotenv").config();
// Require mysql
var mysql = require("mysql2");

// Set up our connection information
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "chirpy"
});

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
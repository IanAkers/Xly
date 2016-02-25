var mysql = require('mysql');
// Sets connection per environment
var config = require('../config.js');

var connection = mysql.createConnection(config);

var connection = mysql.createConnection({
  host: mysqlUri,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDatabase
});

connection.on('error', function(err) {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    connection.connect();
  } else {
    throw err;
  }
});
//connection.connect();

connection.on('error', function(err) {
  console.log('Database error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    var newConnection = mysql.createConnection({
      host: mysqlUri,
      user: mysqlUser,
      password: mysqlPass,
      database: mysqlDatabase
    });
    newConnection.testtest = 'HELLO WORLD I AM A DIFFERENT OBJECT';
    module.exports = newConnection;
  } else {
    throw err;
  }
});

module.exports = connection;
var mysql = require('mysql');

var dbConfig = {
  host: 'mysql-group-a.cgibi6qszwgm.ap-southeast-1.rds.amazonaws.com',
  user: 'master',
  password: 'password',
  database: 'dev'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;
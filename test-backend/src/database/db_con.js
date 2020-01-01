var mysql = require('mysql');
var config = require('./db_info').real; // locat or real or dev
// var config = require('./db_info').real; // locat or real or dev

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
      })
    },

    test_open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('🔴mysql connection error :' + err);
        } else {
          console.info('🔵mysql is connected successfully.');
        }
      })
    }
  } // return
};
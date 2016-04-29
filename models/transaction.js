'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS transactions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          date DATETIME,
          description DATETIME,
          debit INTEGER,
          credit INTEGER
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM transactions', cb);
};

exports.getOneById = function(id, cb) {
  db.get('SELECT * FROM transactions WHERE id = ?', id, cb);
};

exports.removeById = function(id, cb) {
  db.run('DELETE FROM transactions WHERE id = ?', id, cb);
};




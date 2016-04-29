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


exports.create = function(transaction, cb) {
  

  db.run('INSERT INTO transactions (date, description, debit, credit) VALUES (?, ?, ?, ?)', transaction.date, 
  	transaction.description, transaction.debit, transaction.credit,
    (err) => {
      if(err) return cb(err);

      db.get(`SELECT * 
              FROM    transactions
              WHERE   ID = (SELECT MAX(ID)  FROM transactions);`, cb)
    });
};



exports.getOneById = function(id, cb) {
  db.get('SELECT * FROM transactions WHERE id = ?', id, cb);
};

exports.removeById = function(id, cb) {
  db.run('DELETE FROM transactions WHERE id = ?', id, cb);
};




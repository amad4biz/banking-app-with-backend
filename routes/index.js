'use strict';

var express = require('express');
var router = express.Router();

var Transaction = require('../models/transaction');

//  GET /
router.get('/', (req, res) => {
  console.log(1)
  Transaction.get((err, transactions) => {
  console.log(2)

    if(err) {
      console.log(err)
      return res.render('error', {error: err})
    } 
    // else {

    //     return transactions;
    //   }

      res.render('home', {transactions: transactions});
    
  })
})

module.exports = router;

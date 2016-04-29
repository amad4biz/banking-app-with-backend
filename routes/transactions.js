'use strict';

var express = require('express');
var router = express.Router();

var Transaction = require('../models/transaction');

//   /api/transactionss
router.route('/')
  .get((req, res) => {

    Transaction.get((err, transactions) => {
      if(err) {
        return res.status(400).send(err);
      }

      res.send(transactions); // transactions --> res.data
    });
  })
  .post((req, res) => {
    // req.body  -->  { desc: ??, dueDate: ?? }
    Transaction.create(req.body, (err, newTransaction) => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send(newTransaction);
    });
  });

router.put('/:id/toggle', (req, res) => {
  Transaction.toggle(req.params.id, (err, newValue) => {
    if(err) {
      return res.status(400).send(err);
    }
    res.send({newValue: newValue});
  });
});

router.delete('/:id', (req, res) => {
  Transaction.removeById(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

module.exports = router;

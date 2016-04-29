'use strict';

var app = angular.module('transactionApp');

// controllers.js
// all controllers

app.controller('mainCtrl', function($scope, Transaction) {
  console.log('mainCtrl!');


  Transaction.getAll()
  .then(res => {
    $scope.transactions = res.data;
    console.log($scope.transactions)
  })
  .catch(err => {
    console.log('err:', err);
  });

  $scope.createTransaction = () => {
    Transaction.create($scope.newTransaction)
    .then(res => {
      var transaction = res.data;
      $scope.transactions.push(transaction);
      $scope.newTransaction = null;
    })
    .catch(err => {
      console.error(err);
    });
  };

  $scope.removeTransaction = transaction => {
    Transaction.remove(transaction)
    .then(() => {
      var index = $scope.transactionss.indexOf(transaction);
      $scope.transactions.splice(index, 1);
    })
    .catch(err => {
      console.error(err);
    });
  };



});

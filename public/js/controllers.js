'use strict';

var app = angular.module('transactionApp');

// controllers.js
// all controllers

app.controller('mainCtrl', function ($scope, Transaction) {
//adding totals
$scope.totalDebit = 0;
$scope.totalCredit = 0;

  $scope.transactions = [];

  $scope.addTransaction = function() {
    Transaction.create($scope.newTransaction)
    .then(res => {
      var transaction=res.data;
      $scope.transactions.push($scope.newTransaction);
      $scope.totalDebit += $scope.newTransaction.debit || 0;
      $scope.totalCredit += $scope.newTransaction.credit || 0;
      $scope.newTransaction = {};

      // total balance
      $scope.totalBalance = $scope.totalCredit - $scope.totalDebit;
    })  
  };

  //get
  Transaction.getAll()
  .then(res => {
    $scope.transactions = res.data;
   })
  .catch(err => {
    console.log('err:', err);
  });


  // remove
  $scope.removeTransaction = function(transaction) {
    var index = $scope.transactions.indexOf(transaction);
    $scope.totalDebit -= $scope.transactions[index].debit || 0;
    $scope.totalCredit -= $scope.transactions[index].credit || 0;
    $scope.transactions.splice(index, 1);

    // total balance for delete
    $scope.totalBalance = $scope.totalCredit - $scope.totalDebit;

  };


  //sort when click table header
  $scope.sortBy = function(order) {
    if($scope.sortOrder === order) {
      $scope.sortOrder = `-${order}`;
    } else {
      $scope.sortOrder = order;
    }
  };



})

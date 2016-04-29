'use strict';

var app = angular.module('transactionApp');

// controllers.js
// all controllers


app.controller('mainCtrl', function ($scope) {
//adding totals
$scope.totalDebit = 0;
$scope.totalCredit = 0;

  $scope.transactions = [];

  $scope.addTransaction = function() {

    $scope.transactions.push($scope.newTransaction);
    $scope.totalDebit += $scope.newTransaction.debit || 0;
    $scope.totalCredit += $scope.newTransaction.credit || 0;
    $scope.newTransaction = {};

    // total balance
    $scope.totalBalance = $scope.totalCredit - $scope.totalDebit;
  };


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

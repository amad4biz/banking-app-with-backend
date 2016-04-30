'use strict';

var app = angular.module('transactionApp');

// services.js
// all services and factories

app.service('Transaction', function($http) {

  // manage all transaction api calls

  this.getAll = () => {
    return $http.get('/api/transactions');
  };

  this.create = transaction => {
    return $http.post('/api/transactions', transaction);
  };

  this.remove = transaction => {
    return $http.delete(`/api/transactions/${transaction.id}`);
  };


});

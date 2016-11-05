var customerApp = angular.module('customerApp', ['ngRoute', 'customerControllers']);

customerApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/customer', {
        templateUrl: 'partials/customer.html',
        controller: 'CustomerController'
      })
      .when('/addCustomer', {
        templateUrl: 'partials/newCustomer.html',
        controller: 'AddCustomerController'
      })
      .when('/addedCustomer/:customer/:customerNumber/:customerCity', {
        templateUrl: 'partials/addedCustomer.html',
        controller: 'AddedCustomerController'
      });

      $locationProvider.html5Mode(false).hashPrefix('!');
  }
]);

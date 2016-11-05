customerControllers.controller('CustomerController', ['$scope',
  function CustomerController($scope) {

    // initialise some data
    $scope.customerName = "Joe";
    $scope.customerNumber = "01316571234";

    // change the data
    $scope.changeCustomer = function() {
      $scope.customerName = $scope.cName;
      $scope.customerNumber = $scope.cNumber;
    }

  }]);

customerControllers.controller('AddCustomerController', ['$scope', '$location'
  function AddCustomerController($scope, $location) {
      $scope.addNewCustomer = function() {
        $location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity);
      }
  }
]);

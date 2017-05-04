// Code goes here
var a = 0;
angular.module('myapp', [])
  .controller('myctrl', ['$scope', 'myService', 'myFactory', function($scope, myService, myFactory) {
    $scope.firstName = "Enter ...";
    $scope.data = "will be added soon!!"
    $scope.users = {};
     myFactory.getUsers().then(function(response) {
      $scope.data = "Success!! here is your data..";
      $scope.users = response.data;
    }, function(response) {
      $scope.data = "Failed, could  not retrieve data!";
    });
  }])
  .service('myService', ['$http', function($http) {
    this.getUsers = function() {
      return $http.get('https://api.github.com/users');
    };
  }])
  .service('myFactory', ['$http', function($http) {
    return {
      getUsers: function() {
        return $http.get('https://api.github.com/users');
      }
    };

  }]);
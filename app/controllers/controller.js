var myApp = angular.module('myApp', []);



myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

   $scope.main = [{
    movie: 'Kendrick',
    release: 2017,
    rating: 10
  }]
  // $http.get('/main').then(function(response) {
  //   console.log("GOT MA DATA BITCHEZ");
  //   console.log(response);
  //   $scope.main = response.data;
  // });

}]);


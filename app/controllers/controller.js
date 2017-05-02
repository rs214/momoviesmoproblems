var myApp = angular.module('myApp', []);



myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  //  $scope.main = [{
  //   movie: '13 Reasons Why',
  //   release: 2017,
  //   rating: 10
  // }]
  $http.get('/main').then(function(response) {
    console.log("GOT MA DATA BITCHEZ");
    $scope.main = response.data;
  });

  $scope.addMovie = function () {
    console.log($scope.movie, 'MOVIE SUP')
    $http({
          method: 'POST',
          url: '/main',
          data: JSON.stringify($scope.movie)
        })
  }

}]);


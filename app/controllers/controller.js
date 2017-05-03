var myApp = angular.module('myApp', []);



myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var updatePage = function() {
  $http.get('/main').then(function(response) {
    console.log("GOT MA DATA BITCHEZ");
    $scope.main = response.data;
  });
}
  updatePage();

  //onclick add movie
  $scope.addMovie = function () {
    console.log($scope.movie, 'ADDED MY MOVIE BITCHEZ')
    $http({
      method: 'POST',
      url: '/main',
      data: JSON.stringify($scope.movie)
    }).then(function (response) {
      updatePage();
    })
  }

  //onclick remove movie
  $scope.removeMovie = function (id) {
    $http({
      method: 'DELETE',
      url: `/main/${id}`,
    }).then(function (response) {
      updatePage();
    })
  }
}]);


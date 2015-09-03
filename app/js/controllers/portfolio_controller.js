'use strict';

module.exports = function(app) {
  app.controller('portfolioController', ['$scope', '$http', function($scope, $http) {
    $scope.projects = [];
    $http.get('data/projects.json').success(function(data) {
      $scope.projects = data.data;
    });
  }]);
}

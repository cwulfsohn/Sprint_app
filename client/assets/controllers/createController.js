app.controller("createController", ["$scope", "taskFactory", "$location", function($scope, taskFactory, $location){
  $scope.create = function(){
    taskFactory.create($scope.task, function(data){
      console.log(data);
    })
    $location.url('/')
  }
}])

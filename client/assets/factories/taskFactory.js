app.factory("taskFactory", ["$http", function($http){
  var factory = {};
  var tasks = [];
  factory.create = function(task, callback){
    $http.post("/tasks", task).then(function(data){
      callback(data)
    })
  }
  factory.index = function(callback){
    $http.get("/tasks").then(function(data){
      var toDo = [];
      var Doing = [];
      var Done = [];
      for(var i = 0; i < data.data.tasks.length; i++){
        if(data.data.tasks[i].status == 'toDo'){
          toDo.push(data.data.tasks[i])
        }
        else if(data.data.tasks[i].status == 'Doing'){
          Doing.push(data.data.tasks[i])
      }
        else if(data.data.tasks[i].status == 'Done'){
          Done.push(data.data.tasks[i])
      }
    }
      callback(toDo, Doing, Done)
    })
  }
  factory.changeStatus = function(id, callback){
    $http.put("/tasks/"+id).then(function(data){
      callback(data.data)
    })
  }
  return factory;
}])

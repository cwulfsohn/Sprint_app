var mongoose = require('mongoose');
var Task = mongoose.model('Task');


module.exports = {
  index: function(request, response){
    Task.find({}, function(err, tasks){
      response.json({'tasks': tasks})
    }).sort({due_date: 1})
  },
  create: function(request, response){
    var task = new Task({description: request.body.description, due_date: request.body.due_date, priority: request.body.priority})
    task.save(function(err, task){
      if(err){
        response.json({'error': err})
      }else{
      response.json({'task': task})
    }
    })
  },
  update: function(request, response){
    function changeStatus(status){
      if (status == "toDo"){
        return "Doing";
      }
      else if (status == "Doing"){
        return "Done";
      }
      else if (status == "Done"){
        return "Hidden";
      }
    }
    Task.findById(request.params.id, function(err, task){
      if (err){
        console.log(err);
      }
      else{
        Task.findByIdAndUpdate(request.params.id, {status: changeStatus(task.status)}, function(err, updated_status){
          response.json({'err':err});
        })
      }
    })
  }
}

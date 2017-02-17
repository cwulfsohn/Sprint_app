var mongoose = require('mongoose');
var Task = mongoose.model('Task');


module.exports = {
  index: function(request, response){
    Task.find({}, function(err, tasks){
      response.json({'tasks': tasks})
    })
  },
  create: function(request, response){
    var task = new Task({description: request.body.description})
    task.save(function(err, task){
      if(err){
        response.json({'error': err})
      }else{
      response.json({'task': task})
    }
    })
  },
  update: (function(request, resposne){
    console.log(request.params.id)
    var task = Task.findOne({_id: request.params.id})
  })
}

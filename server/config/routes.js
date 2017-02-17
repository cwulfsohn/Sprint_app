
var Task = require("../controllers/tasks.js")
module.exports = function(app){
  app.get('/tasks', Task.index),
  app.post('/tasks', Task.create),
  app.put('/tasks/:id', Task.update)
}

var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
  description: {type: String, required: [true, "Task Description Required"], minlength: 3, trim: true},
  status: {type: String, enum: ['toDo', 'Doing', 'Done', 'Hidden'], default: 'toDo'},
  due_date: {type: Date, required:[true, "Need Due Date"]},
  priority: {type: String, enum: ['Low', 'Medium', 'High'], required: [true, 'Priority Required']}
},{timestamps: true})

mongoose.model('Task', TaskSchema)

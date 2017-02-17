var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
  description: {type: String, required: true, minlength: 3, trim: true},
  status: {type: String, enum: ['toDo', 'Doing', 'Done', 'Hidden'], default: 'toDo'}
},{timestamps: true})

mongoose.model('Task', TaskSchema)

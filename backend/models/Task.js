const mongoose = require('mongoose');

//Defining a schema for tasks, specifying the structure and data types for each field.
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  points: Number,
  completed: Boolean,
});

//Creating a Mongoose model based on the defined schema, which allows for interaction with the tasks collection in MongoDB.
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

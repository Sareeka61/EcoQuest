const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  environmentalImpact: {
    type: Number,
    required: true,
  },
  feasibility: {
    type: Number,
    required: true,
  },
  frequency: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Task', TaskSchema);

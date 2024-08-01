const Task = require('../models/Task'); // Imports the Task model

// Function to get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetches all tasks from the database
    res.json(tasks); // Sends the tasks as a JSON response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Sends an error message if something goes wrong
  }
};

// Function to create a new task
exports.createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    points: req.body.points,
    completed: false, // New tasks are not completed by default
  });

  try {
    const newTask = await task.save(); // Saves the new task to the database
    res.status(201).json(newTask); // Sends the created task as a JSON response
  } catch (err) {
    res.status(400).json({ message: err.message }); // Sends an error message if something goes wrong
  }
};

// Function to mark a task as completed
exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id); // Finds the task by ID
    if (!task) return res.status(404).json({ message: 'Task not found' }); // Sends a 404 response if the task is not found
    task.completed = true; // Marks the task as completed
    await task.save(); // Saves the updated task to the database
    res.json(task); // Sends the updated task as a JSON response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Sends an error message if something goes wrong
  }
};

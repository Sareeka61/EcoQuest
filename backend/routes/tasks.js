const express = require('express'); // Imports the Express module to create a router
const router = express.Router(); // Creates an Express router instance
const taskController = require('../controllers/taskController'); // Imports the task controller

// Route to get all tasks
router.get('/', taskController.getTasks); 

// Route to create a new task
router.post('/', taskController.createTask);

// Route to mark a task as completed
router.patch('/:id/complete', taskController.completeTask);

module.exports = router; // Exports the router for use in the main server file

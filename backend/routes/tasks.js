const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Define a function to calculate total points
const calculatePoints = (task) => {
  const { environmentalImpact, feasibility, frequency } = task;
  return (environmentalImpact + feasibility) * frequency;
};

// Get a random task
router.get('/random', async (req, res) => {
  try {
      const tasks = await Task.aggregate([{ $sample: { size: 1 } }]);
      if (tasks.length > 0) {
          const task = tasks[0];
          task.totalPoints = calculatePoints(task);
          res.json(task);
      } else {
          res.status(404).json({ message: 'No tasks found' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST: Mark a task as completed
router.post('/complete', async (req, res) => {
  // Implement the logic to handle task completion, including saving evidence and granting points
  // For example:
  // const { userId, taskId, evidenceUrl } = req.body;
  // Save the evidence and update user's points based on the taskId
  res.status(200).json({ message: 'Task completed' });
});

// POST: Skip a task
router.post('/skip', (req, res) => {
  // Implement logic to skip a task
  res.status(200).json({ message: 'Task skipped' });
});

module.exports = router;

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
      console.error('Error fetching random task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to mark a task as complete
router.post('/complete', async (req, res) => {
  const { taskId } = req.body;
  try {
      const task = await Task.findById(taskId);
      if (!task) {
          console.error('Task not found');
          return res.status(404).json({ message: 'Task not found' });
      }

      // Here, we would update the task status to completed
      task.completed = true;
      await task.save();

      res.json({ message: 'Task marked as complete' });
  } catch (error) {
      console.error('Error marking task as complete:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to skip a task
router.post('/skip', async (req, res) => {
  const { taskId } = req.body;
  console.log(`Received taskId: ${taskId}`);
  try {
      const task = await Task.findById(taskId);
      if (!task) {
          console.error('Task not found');
          return res.status(404).json({ message: 'Task not found' });
      }

      // Here, we could update the task status to skipped or just inform the client
      res.json({ message: 'Task skipped' });
  } catch (error) {
      console.error('Error skipping task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

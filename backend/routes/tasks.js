const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET: Fetch a random task
router.get('/random', async (req, res) => {
  try {
    const count = await Task.countDocuments();
    const random = Math.floor(Math.random() * count);
    const task = await Task.findOne().skip(random);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
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

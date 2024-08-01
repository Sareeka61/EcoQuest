// const express = require('express');
// const router = express.Router();
// const CarbonEmission = require('../models/CarbonEmission');

// // POST: Add a new carbon emission record
// router.post('/add', async (req, res) => {
//   try {
//     console.log('Data received:', req.body);
//     const emission = new CarbonEmission(req.body);
//     await emission.save();
//     console.log('Data saved:', emission);
//     res.status(201).send(emission);
//   } catch (error) {
//     console.error('Error saving data:', error);
//     res.status(400).send(error);
//   }
// });

// // GET: Retrieve all carbon emission records
// router.get('/', async (req, res) => {
//   try {
//     const emissions = await CarbonEmission.find({});
//     res.status(200).send(emissions);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;

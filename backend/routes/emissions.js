const express = require('express');
const router = express.Router();

const emissionFactors = {
  electricity: 0.92,
  naturalGas: 2.04,
  carTravel: 0.251,
  busTravel: 0.105,
  trainTravel: 0.041,
  shortFlights: 0.115,
  longFlights: 0.09,
  meatConsumption: 27, 
  poultryConsumption: 6.9,
  vegetableConsumption: 2,
  wasteGeneration: 0.23
};

router.post('/calculate-emissions', (req, res) => {
  const inputs = req.body; //req.body contains the user inputs
  const totalEmissions = Object.keys(inputs).reduce((acc, key) => {
    const value = parseFloat(inputs[key]);
    return acc + (isNaN(value) ? 0 : value * emissionFactors[key]);
  }, 0);
  res.json({ totalEmissions: totalEmissions.toFixed(2) });
});

module.exports = router;

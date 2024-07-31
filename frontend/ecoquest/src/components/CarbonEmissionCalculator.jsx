import React, { useState } from 'react';
import axios from 'axios';

const CarbonEmissionCalculator = () => {
  const [inputs, setInputs] = useState({
    electricity: '',
    naturalGas: '',
    carTravel: '',
    busTravel: '',
    trainTravel: '',
    shortFlights: '',
    longFlights: '',
    meatConsumption: '',
    poultryConsumption: '',
    vegetableConsumption: '',
    wasteGeneration: ''
  });

  const [totalEmissions, setTotalEmissions] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const calculateEmissions = async () => {
    console.log("Calculating emissions with inputs:", inputs);
    try {
      const response = await axios.post('http://localhost:5000/api/calculate-emissions', inputs);
      console.log("Response from backend:", response.data);
      setTotalEmissions(response.data.totalEmissions);
    } catch (error) {
      console.error("Error calculating emissions:", error);
    }
  };

  return (
    <div>
      <h2>Carbon Emission Calculator</h2>
      {Object.keys(inputs).map((key) => (
        <div key={key}>
          <label>
            {key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}:
            <input type="number" name={key} value={inputs[key]} onChange={handleChange} />
          </label>
        </div>
      ))}
      <button onClick={calculateEmissions}>Calculate Emissions</button>
      <h3>Total Emissions: {totalEmissions} kg CO2</h3>
    </div>
  );
};

export default CarbonEmissionCalculator;
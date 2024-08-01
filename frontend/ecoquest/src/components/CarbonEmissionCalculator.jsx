import React, { useState } from 'react';
import axios from 'axios';
import conversionMappings from '../jsonfiles/Conversion_Mapping.json';

const CarbonEmissionCalculator = () => {
  const [inputs, setInputs] = useState({
    electronicUse: '',
    heatingUse: '',
    carTravel: '',
    publicTransport: '',
    airTravel: '',
    meatConsumption: '',
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

  const calculateEmissions = () => {
    console.log("Calculating emissions with inputs:", inputs);
    
    const mappings = conversionMappings.conversionMappings;
    let total = 0;
    
    for (const [key, value] of Object.entries(inputs)) {
      const categoryMapping = mappings[key];
      if (categoryMapping) {
        total += categoryMapping[value] || 0;
      }
    }
    
    console.log("Total emissions calculated:", total);
    setTotalEmissions(total);
  };

  const addEmissionRecord = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/carbon-emissions/add', { ...inputs, totalEmissions });
      console.log("Emission record added:", response.data);
    } catch (error) {
      console.error("Error adding emission record:", error);
    }
  };

  const handleCalculateAndAdd = async () => {
    calculateEmissions();
    await addEmissionRecord();
  };

  return (
    <div>
      <h2>Carbon Emission Calculator</h2>
      {Object.keys(inputs).map((key) => (
        <div key={key} className="mb-4">
          <label className="block text-gray-700">
            {key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}:
            <input
              type="number"
              name={key}
              value={inputs[key]}
              onChange={handleChange}
              className="ml-2 p-2 border rounded"
            />
          </label>
        </div>
      ))}
      <button
        onClick={handleCalculateAndAdd}
        className="bg-primary text-white py-2 px-4 rounded-md font-bold border border-transparent hover:border-primary hover:bg-white hover:text-primary"
      >
        Calculate and Save Emissions
      </button>
      <h3 className="mt-4">Total Emissions: {totalEmissions} kg CO2</h3>
    </div>
  );
};

export default CarbonEmissionCalculator;

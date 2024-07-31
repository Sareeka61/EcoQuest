import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import CarbonEmissionCalculator from './components/CarbonEmissionCalculator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Navigation">
        <Navigation />
      </div>
      <div className="Content">
        <CarbonEmissionCalculator />
      </div>
    </div>
  );
}

export default App

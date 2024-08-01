import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'
import Userinfo from './components/Userinfo'
import CarbonEmissionCalculator from './components/CarbonEmissionCalculator';

function App() {

  return (
    <div>
        <div>
  <div class="col-span-4"><Navigation /></div>
  <div class="col-span-8">    <Userinfo /></div>
</div>
  <Navbar />
      </div>
  );
}

export default App

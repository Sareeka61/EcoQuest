import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'
import Userinfo from './components/Userinfo'
import CarbonEmissionCalculator from './components/CarbonEmissionCalculator';
// import UserInputForm from './components/UserInputForm'


const App = () => {
  return (
        <div>
 <Navigation />  
  <Userinfo />
  <Navbar />
  {/* <UserInputForm/> */}
  <CarbonEmissionCalculator/>
</div>
  );
}


export default App;
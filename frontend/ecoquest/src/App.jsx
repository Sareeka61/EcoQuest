import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'
import Userinfo from './components/Userinfo'
// import CarbonEmissionCalculator from './components/CarbonEmissionCalculator';
// import UserInputForm from './components/UserInputForm'
import Login from './components/Signup';
import Signup from './components/Signup'


const App = () => {
  return (
        <div>
 <Navigation />  
  <Userinfo />
  <Navbar />
  <Signup />
  {/* <UserInputForm/> */}
</div>
  );
}


export default App;
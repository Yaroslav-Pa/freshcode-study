import React, { useState } from 'react';
import './App.css';
import PhoneDashboard from './components/PhoneDashboard';
import Clicker from './components/Clicker';

function App(props) {
  const [isClickerShown, setIsClickerShown] = useState(true)
  return (
    <>
      <button onClick={()=>{setIsClickerShown(!isClickerShown)}}>{isClickerShown? 'Close' : 'Shown'} Clicker</button>
      {isClickerShown && <Clicker/>}    
      <PhoneDashboard />
    </>
  );
}

export default App;
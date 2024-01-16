import React from 'react';
import './App.css';
// import PhoneDashboard from './components/PhoneDashboard';
// import Clicker from './components/Clicker';
import StopWatch from './components/StopWatch';

function App(props) {
  // const [isClickerShown, setIsClickerShown] = useState(true)
  return (
    <>
      {/* <button onClick={()=>{setIsClickerShown(!isClickerShown)}}>{isClickerShown? 'Close' : 'Shown'} Clicker</button>
      {isClickerShown && <Clicker/>}    
      <PhoneDashboard /> */}
      <StopWatch/>
    </>
  );
}

export default App;
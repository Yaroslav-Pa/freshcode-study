import React, { Component } from 'react';
import './App.css';
import StopWatchHooks from './components/Hooks/StopWatchOnHooks';
// import Hooks from './components/Hooks';
class App extends Component {
  render() {
    return (
      <>
        {/* <Hooks/> */}
        <StopWatchHooks/>
      </>
    );
  }
}

export default App;

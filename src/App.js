import React, { Component } from 'react';
import './App.css';
import Cliker from './components/Cliker';
import Todos from './components/ToDos';
class App extends Component {
  render() {
    return (
      <>
        <Cliker/>
        <Todos/>
      </>
    );
  }
}

export default App;

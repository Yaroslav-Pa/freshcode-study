import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
class App extends Component {
  render() {
    return (
      <>
        <Header />  
        <RegisterForm/>        
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
// import Hooks from './components/Hooks';
import BlogLoader from './components/Hooks/CustomeHook/function';
class App extends Component {
  render() {
    return (
      <>
        <BlogLoader/>
      </>
    );
  }
}

export default App;

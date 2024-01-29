import React, { Component } from 'react';
import './App.css';
import DataLoader from './components/Dataloader';
import TodoRender from './components/TodoRender';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const asynFun = async () =>
      (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
    return (
      <>
        <DataLoader passedData={asynFun}>{(data)=><TodoRender data={data}/>}</DataLoader>
      </>
    );
  }
}

export default App;

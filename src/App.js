import React, { Component } from 'react';
import './App.css';
import DataLoader from './components/Dataloader';
import TodoRender from './components/TodoRender';
import Header from './components/Header';
import { ThemeContext } from './Context';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  changeTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    const { theme } = this.state;
    const asynFun = async () =>
      (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
    return (
      <>
        <ThemeContext.Provider value={[theme, this.changeTheme]}>
          <Header />
          <DataLoader passedData={asynFun}>
            {(data) => <TodoRender data={data} />}
          </DataLoader>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;

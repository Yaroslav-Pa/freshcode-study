import React, {Component} from 'react';
import './App.css';
import Header from './components/Context/Header';
import MainContent from './components/Context/MainContent';
// import List from './components/Composition/list';
// import Bordered from './components/Composition/BorderedTask';

import { MyContext } from './components/Context/contextCreater';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
  }

  render() {
    const {theme} = this.state;
    return (
      <>
        {/* <List listname="numbers">
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
      </List>
      <Bordered isFlex padding="25px" border="30px solid black" radius="40px">
        <div>asdasdasdasdasd</div>
        <List listname="numbers 2">
          <li>2</li>
          <li>1</li>
          <li>3</li>
        </List>
      </Bordered> */}
      <MyContext.Provider value={theme}>
        <Header/>
        <MainContent/>
      </MyContext.Provider>
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import List from './components/Composition/list';
import Bordered from './components/Composition/BorderedTask';
function App() {
  return (
    <>
      <List listname="numbers">
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
      </List>
      <Bordered isFlex padding="25px" border="30px solid black" radius='40px'>
        <div>asdasdasdasdasd</div>
        <List listname="numbers 2">
          <li>2</li>
          <li>1</li>
          <li>3</li>
        </List>
      </Bordered>
    </>
  );
}

export default App;

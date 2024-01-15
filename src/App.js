import React, { Component } from 'react';
import './App.css';
import PhoneList from './components/PhoneList/PhoneList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneShown: true,
    };
  }

  handleVisibility = () => {
    this.setState({
      isPhoneShown: !this.state.isPhoneShown,
    });
  };
  
  render() {
    const { isPhoneShown } = this.state;
    
    return (
      <>
        <button onClick={this.handleVisibility}>Toggle phone visibility</button>
        {isPhoneShown && <PhoneList />}
      </>
    );
  }
}

export default App;
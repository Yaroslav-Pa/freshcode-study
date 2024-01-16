import React from 'react';
import PhoneList from '../PhoneList';

class PhoneDashboard extends React.Component {
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

export default PhoneDashboard;
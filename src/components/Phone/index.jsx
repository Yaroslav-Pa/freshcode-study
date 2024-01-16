import React from 'react';
import './style.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    // стан існує тільки у класових компонентів
    this.state = {
      isOn: false,
    };

    // прикрутили this // поганий варіант
    this.handleToggleOn = this.handleToggleOn.bind(this);
  }

  handleToggleOn() {
    // setState - метод який приймає об'єкт і зливає його з поточним станом
    // після чого реакт робить повторний рендер
    const stateChanges = {
      isOn: true,
    };
    this.setState(stateChanges);
    /*
      доробити телефону кнопку вимикання, 
      при якій його стан має змінитися на off
    */
  }

  // через => this береться автоматично // правильний варіант
  handleToggleOff = () => {
    this.setState({
      isOn: false,
    });
  };

  handleToggle = () => {
    const { isOn } = this.state;
    this.setState({
      // isOn: !this.state.isOn
      isOn: !isOn,
    });
  };

  render() {
    // function phoneStateChange(){
    //   this.state.phoneState = 'on'; // краще писати вище
    // }
    const { color, price, isFavorite } = this.props;
    const { isOn } = this.state;

    // let phoneStatus;

    // if(phoneState === 'on') {
    //   phoneStatus = <PhoneOnText />;
    // } else {
    //   phoneStatus = <PhoneOffText/>;
    // }

    const phoneStatus = isOn ? <PhoneOnText /> : <PhoneOffText />;

    const containerClass = `phoneContainer ${isOn ? 'on' : 'off'}`;

    return (
      <div className={containerClass}>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        {/* умовний рендерінг */}
        {phoneStatus}
        {isFavorite && <p>Phone is Favorite</p>}
        <button onClick={this.handleToggle}>
          Switch {isOn ? 'on' : 'off'}
        </button>
        {/* <button onClick={isOn ? this.handleToggleOff : this.handleToggleOn}>
          Switch {isOn ? 'on' : 'off'} v2
        </button> */}
        <button>{isFavorite? 'Make':'Remove from'} favorite</button>
      </div>
    );
  }
}

/*
  умовний рендерінг полягає у відмальуванні певних компонентів / елементів / тексту
  за певної умови
*/
function PhoneOnText() {
  return <p>Phone is currently on</p>;
}

function PhoneOffText() {
  return <p>Phone is currently off</p>;
}

export default Phone;

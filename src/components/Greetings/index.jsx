import React from "react";

class Greetings extends React.Component {
  render(){
    // пропси - зовнішні данні що допомагають налаштовувати компонент
    // !!! пропси у компоненті лише для читання
    const {user} = this.props;
    // this.props.user = {test:123123} // error - елемент не може міняти свої пропси
    return <h1>HEllo, {user.name}</h1>
  }
}

// function Greetings2(prop){
//   const {user} = prop;
//   return <h1>HEllo, {user.name}</h1>
// }


export default Greetings;
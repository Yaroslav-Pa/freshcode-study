import React from 'react';
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  clickFunction = () => {
    const { clicks } = this.state;
    this.setState({
      clicks: clicks + 1,
    });
  };

  startInterval = () =>{
    if (!this.setIntervalId){
    this.setIntervalId = setInterval(this.clickFunction, 1000);}
  }
  stopInterval = () =>{
    clearInterval(this.setIntervalId);
    this.setIntervalId=null;
  }

  //метод життевого циклу запускається після першого рендеру компоненту (при створенні або показу після відключення)
  componentDidMount(){
    // this.startInterval();
  }
  //метод життевого циклу запускається після 2-го + рендеру //виклик setState - луп(написати хоча б умову до setState)
  componentDidUpdate(){}

  //метод життевого циклу запускається перед припиненням відображення компонента
  //використовуєтсья для  чистки довгострокових побічних ефектів (наприклад setInterval)
  componentWillUnmount(){
    // this.stopInterval();
  }

  render() {
    const { clicks } = this.state;

    // setInterval(this.clickFunction, 1000); //виклик setState на пряму у render-ДУЖЕ погано
    return (
      <div>
        <p>Clicks:{clicks}</p>
        <button onClick={this.clickFunction}>Add click</button>
        <button onClick={this.startInterval}>Start interval</button>
        <button onClick={this.stopInterval}>Stop interval</button>
      </div>
    );
  }
}

export default Clicker;

import React from 'react';
import { format, addMilliseconds } from 'date-fns';
import './stopWatch.css';
class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(0, 0, 0, 0, 0, 0, 0),
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    if (!this.timeId) {
      this.recursion();
    }
  };

  recursion = () => {
    this.timeId = setTimeout(() => {
      this.tickForTimer();
      this.recursion();
    }, 20);
  };

  stopTimer = () => {
    clearTimeout(this.timeId);
    this.timeId = null;
  };

  tickForTimer = () => {
    const { date } = this.state;
    const newDate = addMilliseconds(date, 20);
    this.setState({
      date: newDate,
    });
  };

  clearTime = () =>{
    const newDate = new Date(0, 0, 0, 0, 0, 0, 0);
    this.setState({
      date: newDate,
    })
  }
  render() {
    const { date } = this.state;
    const timeDate = format(date, 'HH:mm:ss:SS');
    return (
      <div className="container">
        <section className="watch-block">
          <div className='small-button-container'>
            <button
              type="button"
              className="small-button"
              onClick={this.clearTime}
            >
              Clear
            </button>
          </div>
          <div className="time-text">
            <div className="small-text">
              <p>hours</p> <p>minutes</p> <p>seconds</p> <p>millisec</p>
            </div>

            <p>{timeDate}</p>
          </div>
          <div className="button-section">
            <button type="button" onClick={this.startTimer}>
              Start
            </button>
            <button type="button" onClick={this.stopTimer}>
              Stop
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default StopWatch;

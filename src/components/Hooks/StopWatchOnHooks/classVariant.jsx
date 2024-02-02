import React from 'react';
import { format, addMilliseconds } from 'date-fns';
import style from './stopWatch.module.css';
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
    this.setState({
      date: new Date(0, 0, 0, 0, 0, 0, 0),
    })
    this.stopTimer();
  }
  render() {
    const { date } = this.state;
    const timeDate = format(date, 'HH:mm:ss:SS');
    return (
      <div className={style.container}>
        <section className={style.watchBlock}>
          <div className={style.smallButtonContainer}>
            <button
              type="button"
              className={style.smallButton}
              onClick={this.clearTime}
            >
              Clear
            </button>
          </div>
          <div className={style.timeText}>
            <div className={style.smallText}>
              <p>hours</p> <p>minutes</p> <p>seconds</p> <p>millisec</p>
            </div>

            <p>{timeDate}</p>
          </div>
          <div className={style.buttonSection}>
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


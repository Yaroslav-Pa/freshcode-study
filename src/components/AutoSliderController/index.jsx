import React from 'react';
import style from './AutoSliderController.module.css';
class AutoSliderController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { delay, isInSliding, setDelay, autoSlideOn, autoSlideOff } =
      this.props;
    return (
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.nameText}>Auto slide controller </h1>
          <h1 className={style.statusText}>
            Auto slide is {isInSliding ? 'on' : 'off'}
          </h1>
        </div>
        <label className={style.inputWrapper}>
          Delay:
          <input
            className={style.input}
            type="text"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
            disabled={isInSliding}
          />
          ms
        </label>
        <div className={style.buttonWrapper}>
          <button
            className={`${style.button} ${style.buttonOn}`}
            onClick={autoSlideOn}
            disabled={isInSliding}
          >
            turn on
          </button>
          <button
            className={`${style.button} ${style.buttonOff}`}
            onClick={autoSlideOff}
            disabled={!isInSliding}
          >
            turn off
          </button>
        </div>
      </div>
    );
  }
}

export default AutoSliderController;

import React from 'react';
import style from './AutoSliderController.module.css';
import Button from './ButtonForController';

class AutoSliderController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      delay,
      isInSliding,
      setDelay,
      autoSlideOn,
      autoSlideOff,
      isGettingCats,
      toggleFunction,
    } = this.props;
    return (
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.nameText}>Controller </h1>
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
          <Button
            buttonStyle={style.buttonOn}
            onClickFun={autoSlideOn}
            isDisabled={isInSliding}
            text={'turn on'}
          />
          <Button
            buttonStyle={style.buttonOff}
            onClickFun={autoSlideOff}
            isDisabled={!isInSliding}
            text={'turn off'}
          />
        </div>
        <label className={style.catsText}>
          togle this to get cool cats {'->'}
          <input
            type="checkbox"
            value={isGettingCats}
            onChange={(e) => {
              toggleFunction(e.target.checked);
            }}
          />
        </label>
      </div>
    );
  }
}

export default AutoSliderController;

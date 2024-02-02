import React, { useEffect, useState } from 'react';
import { format, addMilliseconds } from 'date-fns';
import style from './stopWatch.module.css';

function StopWatchHooks() {
  const [date, setDate] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isVisible, setIsVisible] = useState(true);
  const [timeId, setTimeId] = useState(null);
  const timeDate = format(date, 'HH:mm:ss:SS');

  const startTimer = () => {
    if (!timeId) {
      recursion();
    }
  };

  useEffect(startTimer, []); //DidMount

  const recursion = () => {
    let newId = setTimeout(() => {
      tickForTimer();
      recursion();
    }, 20);
    setTimeId(newId);
  };

  const tickForTimer = () => {
    setDate((prevDate) => addMilliseconds(prevDate, 20));
  };

  const stopTimer = () => {
    clearTimeout(timeId);
    setTimeId(null);
  };

  const clearTime = () => {
    setDate(new Date(0, 0, 0, 0, 0, 0, 0));
    stopTimer();
  };

  useEffect(()=>clearTime, [isVisible]); //WllUnmount

  return (
    <div className={style.container}>
      <label>
        Visible
        <input
          type="checkbox"
          name=""
          checked={isVisible}
          onChange={() => {
            setIsVisible(!isVisible);
          }}
        />
      </label>
      {isVisible && <section className={style.watchBlock}>
        <div className={style.smallButtonContainer}>
          <button
            type="button"
            className={style.smallButton}
            onClick={clearTime}
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
          <button type="button" onClick={startTimer}>
            Start
          </button>
          <button type="button" onClick={stopTimer}>
            Stop
          </button>
        </div>
      </section>}
    </div>
  );
}

export default StopWatchHooks;

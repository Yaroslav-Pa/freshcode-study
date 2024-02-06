import { useReducer, useEffect } from 'react';

export function useCustomReduser() {
  const initValues = {
    xy: { x: 0, y: 0 },
    counter: 0,
    variableValue: 1,
    isPositive: true,
  };

  const [nowStateAll, pushState] = useReducer(redirectAllStates, initValues);
  

  
  function redirectAllStates (state, action){
    const { type, value } = action;
    let newState = {};
    switch (type) {
      case 'coordinates': {
        newState = {
          ...state,
          xy: value,
        };
        return newState;
      }
      case 'variableValue': {
        newState = {
          ...state,
          variableValue: value,
        };
        return newState;
      }
      case 'counter': {
        const {
          value: { counter, adding, isPositive },
        } = action;

        const newCount = isPositive ? counter + adding : counter - adding;

        newState = {
          ...state,
          counter: newCount,
        };
        return newState;
      }
      case 'togglePositive': {
        newState = {
          ...state,
          isPositive: value,
        };
        return newState;
      }
      default:
        throw new RangeError('Wrong type of action was passed');
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseEvent);
    return () => {
      document.removeEventListener('mousemove', mouseEvent);
    };
  }, []);

  const mouseEvent = ({ clientX, clientY }) => {
    pushState({ type: 'coordinates', value: { x: clientX, y: clientY } });
  };  

  const counterDo = (counter, variableValue, isPositive) =>{
    pushState({
      type: 'counter',
      value: {
        counter,
        adding: variableValue,
        isPositive,
      },
    });
  }
  const selectDo = (value) =>{
    pushState({ type: 'variableValue', value: +value });
  }

  const togglePositive = (isPositive) =>{
    pushState({
      type: 'togglePositive',
      value: !isPositive,
    });
  }

  return [nowStateAll, counterDo, selectDo, togglePositive]
}

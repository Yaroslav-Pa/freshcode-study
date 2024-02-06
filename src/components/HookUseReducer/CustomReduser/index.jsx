import { useReducer, useEffect } from 'react';

export function useCustomReduser() {
  const initValues = {
    xy: { x: 0, y: 0 },
    counter: 0,
    variableValue: 1,
    isPositive: true,
  };

  const [nowStateAll, pushState] = useReducer(redirectAllStates, initValues);

  function redirectAllStates(state, action) {
    const { type, value } = action;
    const { counter, variableValue, isPositive } = state;
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
        const newCount = isPositive
          ? counter + variableValue
          : counter - variableValue;

        newState = {
          ...state,
          counter: newCount,
        };
        return newState;
      }
      case 'togglePositive': {
        newState = {
          ...state,
          isPositive: !isPositive,
        };
        return newState;
      }
      case 'drop':{
        newState = {
          ...state,
          counter: initValues.counter,
        };
        return newState;
      }
      default:
        throw new RangeError('Wrong type of action was passed');
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseEvent);
    return () => {
      document.removeEventListener('mousemove', mouseEvent);
    };
  }, []);

  const mouseEvent = ({ clientX, clientY }) => {
    pushState({ type: 'coordinates', value: { x: clientX, y: clientY } });
  };

  const counterDo = () => {
    pushState({
      type: 'counter',
      value: {},
    });
  };
  const selectDo = (value) => {
    pushState({ type: 'variableValue', value: +value });
  };

  const togglePositive = () => {
    pushState({
      type: 'togglePositive',
      value: {},
    });
  };

  const dropCounter = () => {
    pushState({
      type: 'drop',
      value: {},
    });
  };

  return [nowStateAll, counterDo, selectDo, togglePositive, dropCounter];
}

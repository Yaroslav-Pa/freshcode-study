import { useState } from 'react';
import { ThemeContextHook } from '../Context/contextCreater';
import UseContextTest from './useContext';
function Hooks() {
  //поганий варіант
  // const [state, setState] = useState({ nowClicks: 0, step: 1 });
  // const handleClickAdd = () => {
  //   setState({ ...state, nowClicks: state.nowClicks + state.step });
  // };
  // const handleStepChange = (value) => {
  //   setState({ ...state, step: +value });
  // };

  // краще
  const [nowClicks, setNowClicks] = useState(0);
  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState('white');
  const handleClickAdd = () => {
    setNowClicks(step + nowClicks);
  };
  const handleStepChange = (value) => {
    setStep(+value);
  };


  function handleClick() {

    // setName знає про останнє значення цього елемента тож це можна викорисовувати, щоб значення завжди було поточним, а не ламалось через closure
    setClick((prevClicks) => prevClicks + 1 );
    // але воно швидко може переїхати у кашу
    setStep((prevStep => {
      setClick((prevClicks) => prevClicks + prevStep);

      return prevStep;
    }));


  const changeTheme = ()=>{
    if(theme ==='white'){
      setTheme('black');
    }else{
      setTheme('white');
    }
  }

  return (
    <>
      <div>
        <p>clicks:{nowClicks}</p>
        <button onClick={() => handleClickAdd()}>Click</button>
        <select value={step} onChange={(e) => handleStepChange(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <button onClick={() => changeTheme()}>Click Thmee</button>
      <ThemeContextHook.Provider value={theme}>
        <UseContextTest/>
      </ThemeContextHook.Provider>
    </>
  );
}

export default Hooks;

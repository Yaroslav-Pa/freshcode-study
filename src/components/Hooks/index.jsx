import { useState } from 'react';

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
  const handleClickAdd = () => {
    setNowClicks(step + nowClicks);
  };
  const handleStepChange = (value) => {
    setStep(+value);
  };
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
    </>
  );
}

export default Hooks;

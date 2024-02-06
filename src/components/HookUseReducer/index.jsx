import './index.module.scss';
import { useCustomReduser } from './CustomReduser';

function ReducerHw() {
  const [nowStateAll, counterDo, selectDo, togglePositive] = useCustomReduser();
  const { xy, counter, isPositive, variableValue } = nowStateAll;

  return (
    <div>
      <article className='m-5 flex flex-col gap-2'>
        <h1 className='font-bold'>Cool values</h1>
        <p>
          mouse coordinates: x:{xy.x}, y:{xy.y}
        </p>
        <p>counter: {counter}</p>
      </article>
      <div className="flex flex-row gap-10 m-5">
        <select
          name="count"
          value={variableValue}
          onChange={(e) => {
            selectDo(e.target.value);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button
          onClick={() => {
            counterDo(counter, variableValue, isPositive);
          }}
        >
          Count {isPositive ? '+' : '-'}
        </button>
        <button
          onClick={() => {
            togglePositive(isPositive);
          }}
        >
          Toggle add or remove
        </button>
      </div>
    </div>
  );
}

export default ReducerHw;

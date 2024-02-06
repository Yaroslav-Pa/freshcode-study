import { useReducer } from "react";
/*

const [nowStateAll, pushState] = useReducer(redirectAllStates, initValues)

коротше перша фігня що буквально об'єкт зі всім, відправляться за домогою другої  функції, після чого її ловить третя функція (reducer у нього де описується що куди, ну й прописуємо четвертим що як на почтаку

1) (state у нього(nowStateAll у мене))
2) (dispach у нього (pushState))
3) (redirectAllStates))
4) (inittialstate у нього (initValues))
*/

const redirectAllStates = (state, action) =>{
  let newState = {}
  switch(action.type){
    case 'num1':{
      newState = {
        ...state,
        value1:action.value,
      }
      return newState;
    }
    default:
      throw new Error('Bad value')
  }
}

function ReducerTest() {
  const initValues = {value1:1212, string2:'asdasdasdas', bool3: true, obj4:{}}
  const [nowStateAll, pushState] = useReducer(redirectAllStates, initValues)
  const {value1, string2, bool3, obj4} = nowStateAll;

  const changingValues = (value)=>{
    const action = {type:'num1', value:value}
    pushState(action);
  }

  return ( 
    <div>
      <h1>Cool values</h1>
      <p onClick={()=>{changingValues(3333)}}>value 1:{value1}</p>
      <p>string 2:{string2}</p>
      <p>bool 3:{bool3}</p>
      <button onClick={()=>{console.dir(obj4)}}>Show obj4</button>
    </div>
   );
}

export default ReducerTest;



const sym1 = Symbol('gg'); // единий варіант створення символу
const sym2 = Symbol('gg'); // единий варіант створення символу

// Symbol - не змінний унікальний тип даних. Використовується в об'єктах, не створити через new

console.log(sym1 === sym2); //false бо вони унікальні
console.log(sym1 === sym1); //true

// const objSymb = new Symbol('23') // error через new

const obj = {
  test:123,
  [sym1]: 'what', // запихування Symbol у object v1
  [Symbol('Kear')]: 'cant find it' // не зможемо його витягнути без спец функції
}

obj[sym2] = 'something'; // запихування Symbol у object v2


const symbolFinderArray = Object.getOwnPropertySymbols(obj);//витягує усі символи з об'єкту та закидує їх у масив

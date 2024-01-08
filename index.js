console.log('node start');

/*
Node.js є оточенням з середовищем виконання та корисними бібліотеками
це інтерпритатор що дозволяє переводити виклики на мові JavaScript у машинний код. 

В основі Node.js лежить подієво-керована модель з неблокуючими операціями I/O, що робить її легкою та ефективною.

node -v
npm init
npm init -y

package.json:
"scripts": {
  "start": "node ./index.js",
},

пакет - це якийсь проєкт який доступний для завантаження (все у кого є package.json)
(тут кожний файл інкапсулірован (закритий для інших))
модуль - це кожний файл з якого можна імортувати або експортувати частину його
*/


// 1. Імпорт за замовченням
import componentMy from "./component.js"

// 2. Іменне імпортування
import {sum1, text as textMy} from "./component.js"

// 3. Комбінований імпорт
import ComponentImport, { sum, divide, multiply, test12334 as newName } from './Component.js';

console.log(textMy);

// !!!
// package.json:
// "type":"module",

// декструктурізація не працює у експортах та імпортах



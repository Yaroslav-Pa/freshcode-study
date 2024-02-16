ESmodules - для фронта
CommonJS - для сервера


// import по стандарту CommonJS
const User = require('./userDefault.js'); 
// import іменний CommonJS
const {sum, del} = require('./userDefault.js'); 

// експорт за замовченням CommoneJS (CJS)
modules.export = User;
// іменний експорт CJS
modules.export.sum = sum;
modules.export.del = del;
// * це ↓ як варіант але краще ↑
// modules.export = {
//   sum,
//   del
// }

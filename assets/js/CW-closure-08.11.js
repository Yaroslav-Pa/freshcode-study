// замикання 

// let val ='test';
// function test1(){
//   console.log(`test val = ${val}`)//test
// }
// function test2(){
//   let val = 50;
//   console.log(`test val = ${val}`)//50
//   test1();//test
//   // все тому що функція продивляється усе що їй доступно при створенні, а не при виклику
// }

// function crateMultiplier(x){
//   let prew = x;
//   const muptiplyFun = (y) =>{
//     prew *= y;
//     return prew
//   }
//   return muptiplyFun;
// }
// ===
const crateMultiplier = (x)=> (y) => x *= y

// замикання використовується коли нам потрібна змінна до якої ми не маємо достукатись
// наприклад якщо у користувача спитані данні та їх потрібно перевірити

const muptiply = crateMultiplier(2);

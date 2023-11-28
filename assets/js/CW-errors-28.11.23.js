'use strict';

const myError = new Error('AAAAAAAAAAAAAA');

const something = (int, int2) => {
  if (int === int2) {
    throw myError;
  }
  return "f";
};

try {
  let some = something(5, 5);
} catch (error) {
  console.log('bad thing');
} finally{
  console.log("allways");
}
console.log('All ok?');

// 1. Дан наступний масив ['test', false, 2345, null]
// Зробити масив, елементи якого будуть рядками, зробленими за наступним шаблоном : Item with index X has value Y
// де X - індекс елемента у масиві, Y - значення елементу

// 2. Дан масив, який складається з наступних об'єктів
// {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}
// {firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male',}
// {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',}
// {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
// {firstName: 'Undefined', lastName: 'Undefined', age: 99}
// {firstName: 'Null', lastName: 'Nullochyk', gender: 'male'}

// Отримати на його основі масив повнолітніх користувачів

// 3. Дан масив, який складається з наступних об'єктів
// {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}
// {firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male',}
// {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',}
// {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
// {firstName: 'Undefined', lastName: 'Undefined', age: 99}
// {firstName: 'Null', lastName: 'Nullochyk', gender: 'male'}

// Знайти індекс першої жінки у массиві

let answer = [];
const givenFirstArray = ['test', false, 2345, null];
const givenSecondArray = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
  { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' },
];

const taskOne = (givenArray = givenFirstArray) => {
  return givenArray.map(
    (elem, id) => `Item with index ${id} has value ${elem}`
  );
};

const taskTwo = (givenArray = givenSecondArray) => {
  answer = givenArray.filter((elem) => {
    return elem.age >= 18;
  });
  return answer;
};

const taskThree = (givenArray = givenSecondArray) => {
  answer = givenArray.findIndex((elem) => {
    return elem.gender === 'female';
  });
  return answer;
};

console.log(taskOne());
console.log(taskTwo());
console.log(taskThree());

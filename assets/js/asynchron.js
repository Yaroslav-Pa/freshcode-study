// синхронний код
// console.log(1);
// console.log(2);

// // for(let i = 0; i < 10; i--) {
// //   console.log('iteration');
// // }

// let j = 0;

// for(let i = 0; i < 1000000000; i++) {
//   // console.log('iteration');
//   j++;
// }

// // async
// setTimeout(function callback () {
//   console.log('5 sec');
// }, 5000);

// console.log(3);
// console.log(4);

// const btn = document.querySelector('#btn');

// btn.addEventListener('click' , (e) => {
//   // async arrow
//   console.log('started');

//   for(let i = 0; i < 1000000000; i++) {
//     // console.log('iteration');
//     j++;
//   }

//   console.log('You are logged in');
// });


// console.log('first'); // 1

// console.log('second'); // 2

// const timeoutId = setTimeout(() => {
//   console.log('third'); // 5
// }, 0);

// clearTimeout(timeoutId); // скидання таймаута, синхронна

// const intervalId = setInterval(() => {
//   console.log('interval');
// }, 1000);

// clearInterval(intervalId); // скидання інтервалу, синхронна

// setTimeout(() => {
//   console.log('fourth'); // 4
// }, 0);

// console.log('final'); // 3

/*
  Створити функцію яка буде послідовно виводити числа від 1 до 10
  кожну секунду

    setInterval - треба вчасно зупинити інтервал (clearInterval з іфом)
    setTimeout - в цьому випадку треба буде використати рекурсію
*/






/////04.01.24


const userObj = {
  id: 1,
  name: 'Test',
  contacts: {
    email: 'mail@gmail.com',
    phone: '+380123456789',
  },
  friends: [{}, {}],
  isMale: true,
  money: null,
  currentLocation: undefined,
  getGender: function () {
    return `${this.isMale ? 'male' : 'female'}`;
  },
  symbol: Symbol('user symbol'),
};

// JSON.stringify - метод для серіалізації об'єкта / масива
const serializedUser = JSON.stringify(userObj); // синхронний метод

// JSON.parse - метод для десеріалізації об'єкта / масива з рядка
const parsedUser = JSON.parse(serializedUser); // синхронний метод

// parsedUser === userObj // false
// userObj.friends === parsedUser.friends // false

const users = [
  { id: 1, balance: 500 },
  { id: 2, balance: 1000 },
  { id: 2, balance: 2500 },
];

// поверхнева копія - зміни об'єктів впливають на об'єкти в  users
// const richUsers1 = users.filter((user) => user.balance > 700);
// const newNewObj = {...someObj} // поверхнева копія


// const usersString = JSON.stringify(users)

// const usersCopy = JSON.parse(usersString);

// глибока копія - зміни об'єктів НЕ впливають на об'єкти в users
const usersCopy = JSON.parse(JSON.stringify(users));

const usersCopy2 = structuredClone(users);

const richUsers2 = usersCopy.filter((user) => user.balance > 700);

// function cb () {
//   console.log('test');
//   console.log('test');
//   console.log('test');
//   console.log('test');
//   console.log('test');
//   console.log('test');
// }

// setTimeout(cb, 0);

function task1() {
  // якась асинхронна задача
  console.log('task 1');

  const user = { id: 2132432 };

  setTimeout(() => task2(user), 500);
}

function task2(user) {
  // якась асинхронна задача
  console.log('task 2');
  console.log(user);

  setTimeout(() => task3(), 2000);
}

function task3() {
  // якась асинхронна задача
  console.log('task 3');
}

setTimeout(task1, 1500);

function test() {
  setTimeout(() => {
    // якась асинхронна задача
    console.log('task 1');
    const user = { id: 2132432 };

    setTimeout(() => {
      // якась асинхронна задача
      console.log('task 2');
      console.log(user);

      setTimeout(() => {
        // якась асинхронна задача
        console.log('task 3');

        setTimeout(() => {
          // якась асинхронна задача
          console.log('task 4');
        }, 1000);
      }, 2000);
    }, 500);
  }, 1500);
}





// Promise - обіцянка, сучасний спосіб написання асинхронного коду у JS
// покликаний вирішити проблему callback hell-у
/*
  проміс це об'єкт, якій буде містити результати асинхроної операції

  має три стани:
    - pending ('очікавання') початковий стан промісу
  після pending проміс може перейти у один з наступних станів:
    - fullfiled ('виконано') - стан промісу коли операція завершилася успішно
    - rejected ('відхилено') - стан промісу коли операція завершилася помилкою
*/

// створення промісу через конструктор
// const promise1 = new Promise(); // error

function executor(resolve, reject) {
  // функція яку треба виконати при успішному виконанні вашої операції
  // те що ви в неї кинете буде результатом успішного виконання промісу
  // resolve({
  //   id: 123,
  //   name: 'User',
  // });

  // функція яку треба виконати при НЕуспішному виконанні вашої операції
  // те що ви в неї кинете буде результатом НЕуспішного виконання промісу
  reject(1234);
}

const promise1 = new Promise(executor);

const promise2 = promise1.then(
  function onSuccess(promiseResult) {
    // перший колбек виконується при успішному виконанні проміса
    console.log('Yay!');
    console.log(promiseResult);

    // буде покладено у результат promise2, який буде відхиленим
    // throw new Error('bad data');

    // буде покладено у результат promise2, який буде виконаним
    return 'test';
  },
  function onReject(err) {
    // другий колбек виконується при НЕуспішному виконанні проміса
    // обробник помилки
    console.log('Oh no');
    console.log(err);

    // буде покладено у результат promise2, який буде відхиленим
    // throw new Error('bad data');

    // буде покладено у результат promise2, який буде виконаним
    return 'test';
  }
);

/*
  Створити проміс, який у 50% випадків 
  буде виконаний успішно
  а у 50% - неуспішно
  в консолі побачити його статус 
  та залоговати те що він повертає.
*/

new Promise((resolve, reject) => {
  Math.random() >= 0.5 ? resolve('resolve') : reject('reject');
}).then(
  (result) => console.log(result),
  (result) => console.log(result)
);







/*
05.01.24

сеттаймаут сейтінтервал виконується в тасках
проміси виконується в мікротасках
мікротаски виконуються перед тасками !УСІ після чого виконується ререндер
таски виконуються по одній й після кожної робиться ререндер


нормальний варіант проміса, другий параметр у .then() майже не використовується
new Promise(function).then(fullfild).catch(reject)


XMLHTTPReqest = древній fetch

*/

// ПРИКЛАД fetch
const someURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchTest = fetch(someURL);
fetchTest.then((response) => {
  const res = response.json(); // (також проміс) асинхронна десеріалізація JSON даних
  res.then((data) => {
    // console.log(data);
  });
  // по факту це колбек хелл бо .then в .then (складно розібратись)
});


// const fetch1 = fetch(someURL);
// const fetch1Result = fetch1.then((response) => response.json());

//правельніще:
fetch(someURL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => new Error(err))
  .finally(()=>{console.log()}) 

// .finally виконається у кінці проміса з будь яким результатом




///// async await

// ключове слово async говорить функції щоб та обов'язково повертала проміс (дивлячись чи це throw або return)

async function fun5(){return 3}
const fun6 = async () =>{return 3}

// await пишиться лише в async функція та наверхніх рівнях модулів
// ключове слово await говорить чекати JS`у та віддає відповідь промісу
const someFun123 = async () =>{
  const res = await fetch(someURL); //! знесення обгортки промісу для отриманих даних

  console.log(fetch(someURL)); // проміс
  console.log(await fetch(someURL)); // проміс без обгортки
  console.log(res.json()); // повертає проміс перетворення з JSON  у обгорці

  console.log(await res.json()); //! отримання лише значення промісу перетворення з JSON 
}
// саме на await код становиться асинхронним

// let userNumb1 = +prompt("Enter your numb1");
// let userNumb2= +prompt("Enter your Numb2");

// console.log(userNumb1+" -- "+ userNumb2);

// if (userNumb1 != userNumb1){
//   alert("You entered text in userNumb1")
// }else if (userNumb2 != userNumb2){
//   alert("You entered text in userNumb2")
// }
// else{
//   alert("Sum numbers: "+(userNumb1+userNumb2));
// }

// створення функцій

// const functionOne = function() {
//   console.log("One");
// }

// function functionTwo() {
//   console.log("Two");
// }

// () => expression

// const functionSecond = function (numb1, numb2) {
//   console.log(numb1 + " -- " + numb2);
//   debugger;
//   let answer = '';

//   if (numb1 !== numb1 || typeof numb1 !== "number") {
//     answer = ("You entered text in userNumb1");
//   } else if (numb2 !== numb2 || typeof numb2 !== "number") {
//     answer = ("You entered text in userNumb2");
//   } else {
//     answer = ("Sum numbers: " + (numb1 + numb2));
//   }
//   return answer;
// };

// let userNumb1 = +prompt("Enter your numb1");
// let userNumb2 = +prompt("Enter your Numb2");

// console.log(functionSecond(userNumb1, userNumb2));



//16.11.23


// // тернарний оператор
// // ...? "." : ".."

// const checkIfEnoughMoney = (userMoney, price) => {
//   userMoney >= price
//     ? console.log('Товар було придбано')
//     : console.log('Не достатньо грошей');
// };

// // ternar === '10'
// let ternar = 10 >= 0 ? '10' : '0';

// // userMoney >= price
// // ? console.log('Товар було придбано')
// // : console.log('Не достатньо грошей');
// console.log(userMoney >= price ? 'Товар було придбано' : 'Не достатньо грошей');

// // можна робити тернарки в тернарках, але виглядає страшно !рекомендовано
// console.log(userMoney >= price ? 10 >= 0 ? '10' : '0' : 'Не достатньо грошей');





// //switch ..case

// let itemNumber = prompt("Input # of pizza")

// switch(itemNumber){
//   // // порівнює строго наче ===
//   // // {} опціональні
//   // case 1: {
//   //   alert("1");
//   // }
//   // case 2: {
//   //   alert("2");
//   // }
//   // case 3: {
//   //   alert("3");
//   // }
//   // // але так воно вибирає усе якщо вибрати 1
//   // // його потрібно зупининяти з break 

//   // правильно:
//   case 1: {
//     alert("1");
//     break;
//   }
//   case 2: {
//     alert("2");
//     break;
//   }
//   case 3: {
//     alert("3");
//     break;
//   }
//   //в нього можна провалитися якщо не пставити раніше break
//   default: {
//     alert("Error")
//   }
// }

// // case краще всього використовувати саме для визначених варіантів або робити ось так:
// // саме тому що він по стандарту пробиває усі варіанти до break
// switch(itemNumber){
//   case 1: {
//   }
//   case 2: {
//   }
//   case 3: {
//     alert("Bad");
//     break;
//   }
//   case 4: {
//   }
//   case 5: {
//   }
//   case 6: {
//     alert("Not Bad");
//     break;
//   }
//   case 7: {
//   }
//   case 8: {
//   }
//   case 9: {
//     alert("good");
//     break;
//   }
//   //в нього можна провалитися якщо не поставити раніше break
//   default: {
//     alert("Error")
//   }
// }




//Loops


let numb = 0;

while (numb <= 10) {
  if(numb%2===0) console.log(numb);
  numb++;
}

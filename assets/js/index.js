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




const functionSecond = function (numb1, numb2) {
  console.log(numb1 + " -- " + numb2);
  debugger;
  let answer = '';

  if (numb1 !== numb1 || typeof numb1 !== "number") {
    answer = ("You entered text in userNumb1");
  } else if (numb2 !== numb2 || typeof numb2 !== "number") {
    answer = ("You entered text in userNumb2");
  } else {
    answer = ("Sum numbers: " + (numb1 + numb2));
  }
  return answer;
};

let userNumb1 = +prompt("Enter your numb1");
let userNumb2 = +prompt("Enter your Numb2");

console.log(functionSecond(userNumb1, userNumb2));

const task1 = function(){
  let numb1 = +prompt("Enter first number");
  let numb2 = +prompt("Enter second number");

  if (checkIfCorrectTypeOf(numb1) || checkIfCorrectTypeOf(numb2)){
    return "Entered incorect type of variable"
  }

  if (numb1>numb2){
    return 'numb1 is bigger'
  }else if(numb1<numb2){
    return 'numb2 is bigger'
  }else{
    return 'numbs are equal'
  }
}

console.log(task1);

const task2 = function(){
  let age = +prompt("Enter your age");
  if (checkIfCorrectTypeOf(age)){
    return "Entered incorect type of variable"
  }
  if (age>=18 && age<1000){
    return 'you are adult'
  }else if(age<18){
    return 'you are a minor'
  }else if(age>1000){
    return 'wɪəd skwɪr rɪðnəl?'
  }
}

console.log(task2);

const task3 = function(){
  let numb1 = +prompt("Enter first number");
  let numb2 = +prompt("Enter second number");

  if (checkIfCorrectTypeOf(numb1) || checkIfCorrectTypeOf(numb2)){
    return "Entered incorect type of variable"
  }

  let symbol = prompt("Enter symbol");
  if (symbol === '+'){
    return (numb1+numb2);
  }else if(symbol === '-'){
    return (numb1-numb2);
  }else if(symbol === '*'){
    return (numb1*numb2);
  }else if(symbol === '/'){
    return (numb1/numb2);
  }else {
    return 'This function does not support this kind of symbol in this version'
  }
}

console.log(task3);

const task3_2 = function(){
  let numb1 = +prompt("Enter first number");
  let numb2 = +prompt("Enter second number");

  if (checkIfCorrectTypeOf(numb1) || checkIfCorrectTypeOf(numb2)){
    return "Entered incorect type of variable"
  }

  let symbol = prompt("Enter symbol");
  switch(symbol){
    case '+':{
      return (numb1+numb2);
    }
    case '-':{
      return (numb1-numb2);
    }
    case '/':{
      return (numb1/numb2);
    }
    case '*':{
      return (numb1*numb2);
    }
    default : {
      return 'This function does not support this kind of symbol in this version'
    }
  }
}

console.log(task3_2());

function checkIfCorrectTypeOf(input){
  return (input !== input || typeof input !== "number")
}
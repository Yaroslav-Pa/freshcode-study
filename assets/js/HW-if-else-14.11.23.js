const findSmaller = function(numb1, numb2){
  if (numb1>numb2){
    return numb2;
  }else{
    return numb1
  }
}

const isAdult = function(age){
  // if (age>200){
  //   return 'error';
  // }
  return age>=18 ? true : false;
}

const calculatorIfVersion = function(symbol, numb1, numb2){
  if (symbol === '+'){
    return numb1+numb2;
  }else if(symbol === '-'){
    return numb1-numb2;
  }else if(symbol === '*'){
    return numb1*numb2;
  }else if(symbol === '/'){
    return numb1/numb2;
  }else {
    return 'This function does not support this kind of symbol in this version'
  }
}

const calculatorSwitchVersion = function(symbol, numb1, numb2){
  switch(symbol){
    case '+':{
      return numb1+numb2;
    }
    case '-':{
      return numb1-numb2;
    }
    case '/':{
      return numb1/numb2;
    }
    case '*':{
      return numb1*numb2;
    }
    default : {
      return 'This function does not support this kind of symbol in this version'
    }
  }
}
console.log(findSmaller(9,2));
console.log(isAdult(9));
console.log(calculatorIfVersion('-',9,2));
console.log(calculatorSwitchVersion('+',9,2));
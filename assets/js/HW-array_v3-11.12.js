// const calculatorSymbol = (symbol) => {
//   const calculator = (...inputVal) => {
//     if (symbol === '+')
//       return inputVal.reduce((summ, currentVal) => (summ += currentVal));
//     else if (symbol === '-')
//       return inputVal.reduce((summ, currentVal) => (summ -= currentVal));
//     else if (symbol === '/')
//       return inputVal.reduce((summ, currentVal) => (summ /= currentVal));
//     else if (symbol === '*')
//       return inputVal.reduce((summ, currentVal) => (summ *= currentVal));
//   };
//   return calculator
// };
const calculatorSymbol = (symbol) => {  
  const calculator = (...inputVal) => {
    switch (symbol){
      case '+':
        return inputVal.reduce((summ, currentVal) => (summ += currentVal));
      case '-':
        return inputVal.reduce((summ, currentVal) => (summ -= currentVal));
      case '*':
        return inputVal.reduce((summ, currentVal) => (summ *= currentVal));
      case '/':
        return inputVal.reduce((summ, currentVal) => (summ /= currentVal));
      default:
        throw new Error('Wrong input');
    }
  };

  return calculator
};

sumOf = calculatorSymbol('+');
subOf = calculatorSymbol('-');
multOf = calculatorSymbol('*');
delOf = calculatorSymbol('/');
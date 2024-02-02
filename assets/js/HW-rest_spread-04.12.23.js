const countOfStrings = (...params) => {
  let answer = 0;
  params.forEach((item) => {
    if (typeof item === 'string') answer++;
  });
  return answer;
};

const calculator = (sign, ...allNumbers) => {
  let answer = 0;
  if (sign === '+') {
    allNumbers.forEach((numb) => {
      answer += numb;
    });
  } else if (sign === '-') {
    allNumbers.forEach((numb) => {
      answer -= numb;
    });
  } else if (sign === '*') {
    answer = 1;
    allNumbers.forEach((numb) => {
      answer *= numb;
    });
  } else if (sign === '/') {
    answer = 1;
    allNumbers.forEach((numb) => {
      answer /= numb;
    });
  } else {
    return 'wrong input';
  }
  return answer;
};

const findMaxNumber = (array, ...allNumbers) => {
  const conArray = [...array, ...allNumbers]; //просто сподобались spread оператори)
  return Math.max(...conArray);
};

console.log(`Task 2 answer: ${calculator('/', 1, 2, 3, 4)}`);

// const calculatorWithSwitch = (sign, ...allNumbers) => {
//   let answer = 0;
//   switch (sign) {
//     case '+': {
//       allNumbers.forEach((numb) => {
//         answer += numb;
//       });
//       break;
//     }
//     case '-': {
//       allNumbers.forEach((numb) => {
//         answer -= numb;
//       });
//       break;
//     }
//     case '*': {
//       answer = 1;
//       allNumbers.forEach((numb) => {
//         answer *= numb;
//       });
//       break;
//     }
//     case '/': {
//       answer = 1;
//       allNumbers.forEach((numb) => {
//         answer /= numb;
//       });
//       break;
//     }
//     default: {
//       answer = 'wrong input';
//     }
//   }
//   return answer;
// };

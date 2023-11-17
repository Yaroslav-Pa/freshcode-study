const task1_f = () => {
  let savedNumb = 0;
  for (i = 0; i <= 100; i++) {
    savedNumb += i;
  }
  console.log(savedNumb);
};

const task1_w = () => {
  let savedNumb = 0;
  let i = 0;
  while (i <= 100) {
    savedNumb += i;
    i++;
  }
  console.log(savedNumb);
};

const task1_d = () => {
  let savedNumb = 0;
  let i = 0;
  do {
    savedNumb += i;
    i++;
  } while (i <= 100);
  console.log(savedNumb);
};

const task2_f = () => {
  let lives = 3;

  for (let answer; answer !== 2 + 2 * 2; lives--) {
    if (lives <= 0) {
      console.log('You lose');
    }

    answer = +prompt('What is answer to 2 + 2 * 2? Enter Number');

    if (answer === 2 + 2 * 2) {
      console.log('True answer is ' + (2 + 2 * 2));
      console.log('You win');
      break;
    }
  }
};

const task2_w = () => {
  let lives = 3;

  while (true) {
    let answer = +prompt('What is answer to 2 + 2 * 2? Enter Number');

    if (answer !== 2 + 2 * 2) {
      lives--;
    }

    if (answer === 2 + 2 * 2 || lives === 0) {
      console.log('True answer is ' + (2 + 2 * 2));
      if (lives === 0) {
        console.log('You lose');
      } else {
        console.log('You win');
      }
      break;
    }
  }
};

const task2_d = () => {
  let lives = 3;

  do {
    let answer = +prompt('What is answer to 2 + 2 * 2? Enter Number');

    if (answer !== 2 + 2 * 2) {
      lives--;
    }

    if (answer === 2 + 2 * 2 || lives === 0) {
      console.log('True answer is ' + (2 + 2 * 2));
      if (lives === 0) {
        console.log('You lose');
      } else {
        console.log('You win');
      }
      break;
    }
  } while (true);
};

const task3 = () => {
  let numbTo = +prompt('Enter Number');
  let numbOn = +prompt('Enter Number');
  if (checkIsNumber(numbTo) || checkIsNumber(numbOn)) {
    return 'Entered incorect type of variable';
  }
  let answer = 1;
  for (let i = 0; i < Math.abs(numbOn); i++) {
    answer *= numbTo;
  }
  if (numbOn < 0) {
    numbOn % 2 === 0 ? answer : -answer;
  }

  return answer;
};

const task4 = () => {
  let numb = +prompt('Enter Number');
  if (checkIsNumber(numb)) {
    return 'Entered incorect type of variable';
  }
  if (numb === 0){
    return 1;
  }
  if (numb < 0){
    return "Error";
  } 
  let temp = numb;
  for (let i = 1; i < temp; i++) {
    numb *= i;
  }
  return numb;
};

const task5 = (numb) => {
  // https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Primencomposite0100.svg/220px-Primencomposite0100.svg.png
  let sum = 0;
  for (let i = 0; i <= numb; i++) {
    if (numb % i === 0) {
      sum += i;
    }
  }
  if (sum === numb + 1 || numb === (1 || 0)) {
    return true;
  } else {
    return false;
  }
};

function checkIsNumber(input) {
  return input !== input || typeof input !== 'number';
}

window.addEventListener("load", (event) => {
  let input = +prompt('Enter Number');
  if (checkIsNumber(numb)) {
    return 'Entered incorect type of variable';
  }
  task5(input);
});

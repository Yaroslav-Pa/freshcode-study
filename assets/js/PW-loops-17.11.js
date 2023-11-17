
const task1 = () => {
  let savedNumb = 0;
  for (i = 0; i<100; i++){
    savedNumb += i;
  }
  console.log(savedNumb);
}

const task2 = () => {
  let lives = 3;
  let answer = false;
  while (answer){
    answer = +prompt('What is answer to 2 + 2 * 2? Enter Number')
    if (answer !== (2 + 2 * 2)){
      lives--;
    }
    if (answer === (2 + 2 * 2) || lives === 0){
      
      break;
    }
  }
}

task1();
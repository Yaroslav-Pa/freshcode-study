const factorial = (number) => {

  if (number === 0){
    return 0;
  }
  if (number === 1){
    return 1;
  }
  if (number > 1){
    return number *= factorial(--number);
  }

  //чисто теорітично number > 170 буде дорівнювати infinity 
}
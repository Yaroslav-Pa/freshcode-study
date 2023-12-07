const logRenge = (min, max) => {
  if (min>max){
    let temp = min;
    min = max;
    max = temp;
  }
} 


const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    },
    right: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    }
  },
  right: {
    value: 3,
    right: {
      value: 6,
      left: {
        value: 9
      },
    }
  }
}

function reduceTree(treeObj){
  let total = treeObj.value;

  if(treeObj.left){
    total += reduceTree(treeObj.left);
  }
  if(treeObj.right){
    total += reduceTree(treeObj.right);
  }
  return total;
}


// const toPower = (number, to) =>{
//   // debugger;
//   pow = number;
//   if (to > 1){
//     pow = toPower(number,to-1)
//   }else{
//     number = 1;
//   }
//   answer = number*pow;
//   return answer;
// }

const toPower = (number, to) =>{
  if (to === 0){
    return 1;
  }
  if (to === 1){
    return number;
  }
  if (to >1 ){
    return number *= toPower(number, --to);
  }

  if (to < 0 ){
    return 1 / (number *= toPower(number, (Math.abs(to)-1)));
  }
  // answer *= answer;
  // return answer
}
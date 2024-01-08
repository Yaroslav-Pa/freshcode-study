class Component{  
  render(){
    return 'rendered component'
  }
}

const sum = (...nums) => nums.reduce((acc, num) => acc + num);
const substract = (...nums) => nums.reduce((acc, num) => acc - num);
const multiply = (...nums) => nums.reduce((acc, num) => acc * num);
const divine = (...nums) => nums.reduce((acc, num) => acc / num);


// 1. експорт за замовченням
// один
export default Component;

// 2. Іменний експорт
// багато
export {sum1, sum2};
export const text = 'asdasdasdasd';
export function test(){};

//при експорте усе закине у один об'єкт (але й сама розкладе цей об'єкт при отриманні)

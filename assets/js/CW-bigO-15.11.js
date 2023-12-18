const numb=[1,3,45,4,5]

// O(n) - константна складність 
const funO = (numbs, val)=>{ 
  for (let i = 0; i<numbs.length; i++){
    if (numbs[i]===val){
      return i
    }
  }
  return -1;
  }

console.log(funO(numb, 3));

// O(log n) - логарифмічна складність

const sortedArr = [1,2,5,8,12,20,35,50,125,512];

function binarySearch (arr, value) {
  debugger;
  /*
    знайти початковий, кінцевий та середній індекс ВІДСОРТОВАНОГО масиву
    поки не знайдемо число пробуємо наступне:
      порівнюємо середній елемент масиву з value
        якщо співпадає
        якщо ні то відкидаємо половину масиву і змінюємо початок / кінець і середину
  */
  let start = 0;
  let end = arr.length - 1;

  let middle = Math.round((start + end) / 2);

  while(true) {
    if(arr[middle] === value) {
      return middle;
    }

    if(arr[middle] > value) {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }

    if(arr[middle] < value) {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    }
  }
}

// O(n^2) - квадратична складність
function bubbleSort(array) {
  /*
    проходимося по масиву і порівнюємо 2 значення
    якщо 1 значення більше ніж 2 то міняємо їх місяціми у масиві
    повторюємо ці дії поки масив не буде повністю відсортованим (по зростанню)
  */
 // зовнішній цикл запускається n разів
  for (let i = 0; i < array.length; i++) {
    // внутрішній цикл запускається n * n разів
    for (let j = 1; j < array.length; j++) {
      let value1 = array[j - 1];
      let value2 = array[j];

      if (value1 > value2) {
        array[j - 1] = value2;
        array[j] = value1;
      }

      // for(let n = 0 ; n < array.length;n++) {
      //   // ... O(n^3)
      // }
    }
  }

  // for(let i = 0; i < array.length; i++) {
  //  O(n+n) -> O (2n) -> O(n) 
  // }

  return array;
}


bubbleSort([5, 2, 3, 4, 1]);
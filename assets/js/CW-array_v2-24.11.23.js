// let arr = ['a','b','c','d','f'];
// let deeeeepArray = [1, 1, 1, [2, 2, [3, 3, [4, 4]]]];

// console.log(deeeeepArray[3][2][2][0]); // 4

// // const flat1 = deeeeepArray.flat(1); //[1, 1, 1, 2, 2, [3, 3, [4, 4]]]
// // // "розрівнює" вказану у параметках глибину масивів у вибораному масиву 


// const concat1 = arr.concat('Fedor', 'Json'); //закидує усе у вибраний масив, не змінює сам масив
// const concat2 = arr.concat('Fedor', 'Json', ['Fedor', 'Json']); //може розкрити масив що йому передають
// const concat3 = arr.concat('Fedor', 'Json', ['Fedor', 'Json' ['Fedo3', 'Json3']]); //але лише 1 у глубь
// console.log(arr);



// let mass = [1,10,1,23,4,5];

// console.log(mass.includes(10), mass); //immutable

// let mass2 = [1, 2, 3, [10,20,30,[100,[1000]]],4];
// let flat = mass2.flat(Infinity); //immutable
// console.log(flat);

// let array1 = [1,2,3,4];
// let array2 = [9,8,7,6];
// let concatTest = array1.concat(10, array2); //immutable
// console.log(concatTest);


//forEach

// // const users = [{id:0},{id:1},{id:2},{id:3}]

// // const showEveryUser = (user, curentIndex, allArray) => {
// //   console.log(user);
// //   console.log(curentIndex);
// //   console.log(allArray);
// // }

// // users.forEach(showEveryUser);


//test

const testArray = [1,2,3,4,5];

const funcForTest = (number) => {
  console.log(number**4)
}

testArray.forEach(funcForTest);



//map
const NewArray = testArray.map( (numb) => { //дуже схожа на forEach але записує значення що повртаються, повертає ту саму ж кількість об'єктів що й війшла
  return numb**4;
})



const users = ['Anton2', 'Andray', 'Hodof', 'Gendalf', 'Anton']

//filter
const betterUsers = users.filter( (name) => { // може повернути не всі об'єкти що увейшли
  // if (name !== Anton){
  //   return true; //опиниться у новому масиву
  // }else{
  //   return false; //не опиниться у новому масиву
  // }
  return (name !== 'Anton');
})


//some 
//(буквально if(item1 === "something" || item2 === "something"...))
const isAntonIn = users.some((name)=>{ //повертає bool якщо деякий === чомусь
  return name ==='Anton';
})


//every 
//(буквально if(item1 === "something" && item2 === "something"...))
const isEveryAnton = users.some((name)=>{ //повертає bool якщо усі === чомусь
  return name ==='Anton';
})

//find 
// повертає перший елемент масива що === чомусь
const firstAnton = users.find((name) => {
  return name ==='Anton'
})

//findIndex 
// повертає індекс першого елементу масива що === чомусь
const indexAnton = users.findIndex((name) => {
  return name ==='Anton'
})
// !!! якщо не знайде відповідний елемет поверне значення -1

//indexOf
// повертає індекс першого елементу масива що === переданому значенню
const indexAnton2 = users.indexOf('Anton')
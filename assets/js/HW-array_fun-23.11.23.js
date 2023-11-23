let arr = [1,2,3,4,5,6,7,8,9,10];

arr.splice(-5);
console.log(arr);

arr = [1,2,3,4,5,6,7,8,9,10];
arr.splice(2,2,'hello');
console.log(arr);

arr = [0,1,2,3,4,5,6,7,8,9];
let slice1 = arr.slice(4, 8); 
let slice2 = arr.slice(-3); 

console.log(slice1, slice2);
// const X = +prompt('X');
// const Y = +prompt('Y');

// ''
// ""
// `` // шаблоний рядок


// console.log('\n' + X + ' * ' + Y + ' = ' + X * Y);

// console.log(`${X} + ${Y} = ${X + Y}`);
// console.log(`${X} - ${Y} = ${X - Y}`);
// console.log(`${X} * ${Y} = ${X * Y}`);
// console.log(`${X} / ${Y} = ${X / Y}`);


let string = `Test string ok`;

// let letter1 = string.charAt(3); // t 
// let letter2 = string[3]; // t 
// let unicodeOfLetter = string.charCodeAt(3); //116

string[2] = 'x'; // не зміниться бо рядки є імутабильними у JS

let newString = string.concat('adsdad', 'asdasdasd'); // 'Test string okadsdadasdasdasd'

let isOkHere = string.includes('ok'); //true

let okStartIndex = string.indexOf('ok'); //12
let indexOf0= string.indexOf('123'); //-1

let sliceString1 = string.slice(0,4); // 'Test'
let sliceString2 = string.slice(-5); //'ng ok'

string.replace('що','на що'); // заміна тексту на текст

let split1 = string.split();
let split2 = string.split(' '); //масив слів ерез пробіл
let split3 = string.split(''); // масив букв



// // // const toRandCase = (text) => {
// // //   let answer;
// // //   console.log(text[(Math.random()*text.length).toFixed()]);
// // //   for (let i = 0; i < text.length; i++){
// // //     let letter = text[i];
// // //     answer += 
// // //   } 
// // //   return answer;
// // // }

// // // console.log(toRandCase('Sometext'));

// // // const Test1 = (sent) => {
// // //   let splited = sent.split(' ');
// // //   let answer = '';
// // //   console.log(splited[1][1]);
// // //   for (let i = 0; i<splited.length; i++){
// // //     answer += splited[i][1].toUpperCase();
// // //   }
// // //   return answer;
// // // }

// не правильно(
const Test1 = (string) => {
  let answer = null;
  for (let i =0; i < string.length; i++){
    if (string[i-1]===' ' || i ===0){
      string = string.replace(string[i],string[i].toUpperCase());
    } 
  }
  return string;
}

const Test2 = (sent, finding) => {
  let count = 0;
  for (let i = 0; i<sent.length; i++){
    if (finding.includes(sent[i])){
      count++;
    };
  }
  return count;
}


console.log(Test2('test text', ['a','e','i','o','u']));
console.log(Test1('test text'));
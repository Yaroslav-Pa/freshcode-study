// отримати доступ до DOM

// window - об'єктне уявлення браузеру (інтерфейс за яким ми керуємо браузером)

// window.document || document - DOM

console.dir(document); // console.dir(чогось) показання чогось саме як об'єкту

/*
  концепції взаємодії з домом
    все в домі зроблено (у вигляді) об'єктами
    працювати будемо за допомогою подій
*/
const clicking = () => {
  let number = 0;

  const clickFun = function () {
    alert(`Its a click number ${++number}`)
    return number;
  };

  return clickFun;
};

// const button1 = document.getElementById('clicableButton');
// button1.addEventListener('click', clicking());





//22.12.23

// пошук елемента у ДОМ - дереві
/*
document.getElementsByTagName('div') - шукає усі елементи з указаним тегом і кладе іх у псевдомасив (є ітератор)
* document.getElementById('someId') - повертає перший елемент з вказаним айді
document.getElementsByClassName('className') - шукає усі елементи з указаним класом
document.getElementsByName('name') - шукає усі елементи з указаним атрибутом name

* document.querySelector('#div.btn > span') - повертає перший елемент який задовільняє вказаному css селектору
document.querySelectorAll('#div.btn > span') - повертає всі елементи які задовільняють вказаному css селектору
*/

const button1 = document.getElementById('clicableButton');


const finded = document.querySelectorAll(['div>section>h1', 'div>img', 'body>section>p']);
const findedImg = document.querySelector('div>img');
const findedP = document.querySelector('body>section>p');

// const onceClick = () => {
//   alert('v2 once click')
//   button1.removeEventListener('click', onceClick)
// }
// // button1.addEventListener('click', ()=>alert('v1 once click'), {once:true});
// button1.addEventListener('click', onceClick);


const getText = (event) => {
  console.log(event.target.textContent);
  console.log(event.target.innerText);
}

const setAskedNumberDouble = (event) => 
  event.target.nextElementSibling.textContent += prompt('enter your number')**2

button1.addEventListener('click', setAskedNumberDouble);











// 25.11.23


const clickHandler = (event) => {
  // console.log(event);
  // console.log(event.target); // найглибший елемент з ким відбулась подія
  console.log(event.currentTarget); // елемент, на якому висить обробник який запустився
};


// -Бульбашковий механізм

// btn.addEventListener('click', clickHandler); // button 1
// document.body.addEventListener('click', clickHandler); // body 2
// document.addEventListener('click', clickHandler); // html 3
// window.addEventListener('click', clickHandler); // сторінка 4

// btn.addEventListener('click', clickHandler, true); // button 4
// document.body.addEventListener('click', clickHandler, {capture: true}); // body 3
// document.addEventListener('click', clickHandler, true); // html 2
// window.addEventListener('click', clickHandler, true); // сторінка 1

// btn.addEventListener('click', clickHandler, true); // button 2
// document.body.addEventListener('click', clickHandler, {capture: false}); // body 3
// document.addEventListener('click', clickHandler); // html 4
// window.addEventListener('click', clickHandler, true); // сторінка 1


// btn.addEventListener('click', (event)=>{ event.stopPropagation() }); // button 1
// document.body.addEventListener('click', clickHandler); // body не виконається через event.stopPropagation() 
// document.addEventListener('click', clickHandler); // html не виконається через event.stopPropagation() 
// window.addEventListener('click', clickHandler); // сторінка не виконається через event.stopPropagation() 


// !!! event.stopPropagation() // відміняє виконання сплиття або занурення
// !!! event.stopImmediantPropagation(); // відміняє виконання усіх наступних івентів на цьому елементі


// -Делегування подій

const divContainer = document.getElementById('container-buttons');
divContainer.addEventListener('click',(e)=>{
  if (e.target.tagName === 'BUTTON'){
    divContainer.style.backgroundColor = e.target.textContent;
  }
})

// form

// const form1 = document.querySelector('#form');

// form1.addEventListener('submit', (e) => {
//   // зупиняє стандартну поведінку
//   e.preventDefault(); 

//   // припиняє подальше сплиття або занурення
//   // e.stopPropagation();

//   console.log('test');
//   console.log(e.target); // form
//   console.log(e.target.elements) // всі інтерактивні елементи форми
// });


////// ДЗ

const form2 = document.getElementById('form');
const paragraf = document.querySelector('form > p');

form2.addEventListener('submit', (e) =>{
  e.preventDefault();

  const inputVal = e.target.elements[0].value;

  // if (+inputVal === +inputVal & inputVal.trim() !== ''){
  if (!isNaN(inputVal) & inputVal.trim() !== ''){ // isNaN неявно переводить типи у намбер
    paragraf.style.color = 'black';
    paragraf.textContent = `Doble of your input is ${inputVal**2}`;
  }else{
    paragraf.style.color = 'red';
    paragraf.textContent = `Error input correct type (number)`;
  } 
  
  // e.target.elements[0].value = '';
  e.target.reset();
})



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
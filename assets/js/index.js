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

document.getElementById('clicableButton').addEventListener('click', clicking());

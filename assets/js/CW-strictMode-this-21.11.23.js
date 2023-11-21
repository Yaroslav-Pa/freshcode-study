"use strict";

let phone = {
  mark: "xiomi",
  model: "redmi note 9",
  price: 150,
  color: 'emerald',
  isOn: true,
  operator: null,
  phoneRing: function(){
    console.log("дзвін");
  },
  'key one': 1,
  fucn: function() {
    console.log('Телефон '+this.mark+' '+this.model+' коштує '+this.price+'$ ' + 'та він зараз '+ (this.isOn? 'включений':'виключений'));
  }
}

// створюємо об'єкти як по "шаблону"
// //  альтернативи створення об'єктів
// // // let hamster1 = {};  //літеральний
// // // let hamster2 = Object(); 
// // // let hamster3 = new Object(); 
// НЕ Є конструктором за ідеєю JS 
function Phone(mark, model, price, color, isOn, operator) {
  let newPhone = {
    //  mark: mark, == довго, не робити
    mark, // правильно (якщо назва поля та параметра співпадають)
    model,
    price,
    color,
    isOn,
    operator
  }

  return newPhone;
}


//функція КОНСТРУКТОР = створює об'єкти по "шаблону"
// писати з Великої літери (PascalCase)
// передаємо усе що повторюється
function PhoneConst(mark, model, price, color, isOn, operator) {

  //return 50; // JS ігнорує це через слово NEW, бо це не є об'єктом 
  // this тут буде відповідати за об'єкт що буде повертатися
  this.mark = mark;
  this.model = model;
  this.price = price;
  this.color = color;
  this.isOn = isOn;
  this.operator = operator;
  this.call = function (){
    console.log('calling')
  };
  this.fucn = function() {
    console.log('Телефон '+this.mark+' '+this.model+' коштує '+this.price+'$ ' + 'та він зараз '+ (this.isOn? 'включений':'виключений'));
  }
}


const phone2 = Phone(); // створити вже повноційнний об'єкт але НЕ ЯК конструктор
const phone3 = new PhoneConst("redmi", '0', 20, 'green', false, 'Vodaphone'); // створити вже повноційнний об'єкт але ЯК конструктор 
// JS розуміє що це є конструктором за допомогою new перед функцією 
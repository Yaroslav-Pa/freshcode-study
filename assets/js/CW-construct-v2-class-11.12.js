// old variant
function OldUser(name, fullName, age) {
  this.name = name;
  this.fullName = fullName;
  this.age = age;
}

const protot = {
  fun: function () {
    return `${this.fullName} is having fun`;
  },
};

OldUser.prototype = protot;

const oldUser = new OldUser('jake', 'last', 18); // поверне об'єкт

const oldUser2 = OldUser('jake', 'last', 18); // поверне undifiend бо без new
// якщо у не у стрікт моде, то є можливість перезаписування значень у this (window)

// old variant ^

// new one =>
//class це синтаксичний цукор для створення конструкторів
class House {
  // тіло класу
  // завжди виконується у стрікт режимі

  //метод конструктору - клас очікує його, тому підскажить
  constructor(numberOfFloors = 1, adress = 'something 12', style = 'modern') {
    this.numberOfFloors = numberOfFloors;
    this.adress = adress;
    this.style = style;
  }

  //далі методи конструктора
  getHouseData() {
    return `House address: ${this.adress}, flors ${this.numberOfFloors}`;
  }
  //властивість прототипу //не дуже роблять
  isBuild = true;
}

// створення екземпляру класу
const house1 = new House(); // не буде працювати без new // error

// завдання на практику:

class User {
  constructor(firstname, lastname, hieghtInMeters, age, isMan) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.hieghtInMeters = hieghtInMeters;
    this.isMan = isMan;
    this.age = age;
  }

  getUserInfo() {
    return `First name: ${this.firstname}, last name: ${
      this.lastname
    }, hieght ${this.hieghtInMeters} m, sex: ${
      this.isMan ? 'man' : 'woman'
    }, age: ${this.age}`;
  }
  isAdult() {
    return this.age >= 18;
  }
}

const user1 = new User('Oleg', 'Helsink', 1.5, 24, true);

class Product {
  constructor(name, price, countInStock, isForAdult) {
    if (price < 0) {
      throw new RangeError('Ціна не може бути <0');
    }
    if ((typeof name === 'string') & name) {
      throw new TypeError('Має бути назва у типі стоки');
    }

    this.name = name;
    // _name це узгодження не змінювати на пряму цю змінну
    this._price = price;
    //!!!гетер та сетери будуть стрюватись раніше самого конструктору тому:
    //...ось цей рядок буде виконуватись як сетер 
    // this.price = price;
    this.countInStock = countInStock;
    this.isForAdult = isForAdult;
  }

  // гетер - штучний замінник отримання певної зміної
  //  product1.price запросити ціну
  get price() {
    return this._price;
  }

  // сеттер - штучний замінник задавання певної зміної 
  //  product1.price = 100 сетнути ціну
  set price(newPrice) {
    if (typeof newPrice !='number' & newPrice){
      throw new Error('price cant be NaN or empty')
    }
    return (this._price = newPrice);
  }

  productPrice = () => this._price * this.countInStock;
}

const product1 = new Product('Coka kola', 79, 100, false);

const video1 = {
  id: 0,
  title: 'My first video',
  desctiprion: 'sadasd',
  views: 15000,
  likes: 150,
  dislikes: 3,
  isPrivate: false,
  comments: [
    {
      id: 0,
      text: 'dasdasdsadsad',
    },
  ],
  addViews: function () {
    return ++this.views;
  },
};

let videoId = 0;
function Video(title, desctiprion, isPrivate) {
  this.id = videoId++;
  this.title = title;
  this.desctiprion = desctiprion;
  this.views = 0;
  this.likes = 0;
  this.dislikes = 0;
  this.isPrivate = isPrivate;
  this.comments = [];
  //НЕ оптимальний варіант
  // this.__proto__ = vidoePrototype;
}

const vidoePrototype = {
  addViews: function () {
    return ++this.views;
  },
};
//даємо прототип конструктору й він сам виставляє прототип екземплярам
Video.prototype = vidoePrototype;

const video2 = new Video('Hello', '...', false);
const video3 = new Video('World', '...', false);

console.log('========Prototypes=======');
let test1 = [];
let test2 = [];

// console.log(video2.addViews === video3.addViews); //false
// console.log(test1.pop === test2.pop); //true
//тому що ці функції стовюються кожного разу нові для кожного нового відео

// прототип це спеціальний об'єкт у який потрібно класти усе що має бути однаковим для кожного з об'єкта що створюється

const Cat = {
  name: 'Cat1',
};
const Dog = {
  name: 'Dog1',
};

const animal = {
  sleep: function () {
    console.log(`${this.name} is sleeping`);
  },
};

Cat.__proto__ = animal;
Dog.__proto__ = animal;

// Cat.sleep();
// Dog.sleep();
//__proto__ vs prototype
//__proto__ це прототип саме для об'єктів та функцій
//prototype це визначення прототипу що конструктор надасть екземплярам



//test
const carProt = {
  speedChange: function (changeTo) {
    let endSpeed = this.V + (changeTo);
    if (endSpeed >= 0 && endSpeed <= this.maxV) {
      this.V += changeTo;
    }else if(endSpeed > this.maxV) {
      this.V = this.maxV; 
    }else{
      this.V = 0; 
    }
    return this.V;
  },
  speedUp: function (upTo) {
    if (this.V < this.maxV) {
      this.V += upTo;
      if ((this.V + upTo) > this.maxV){
        this.V = this.maxV;
      }
    }
    return `current speed: ${this.V}`;
  },
  speedDown: function(downTo) {
    if (this.V > 0){
      this.V-=downTo;
      if ((this.V - downTo) < 0){
        this.V = 0;
      }
    }
    return `current speed: ${this.V}`;
  },
  fullStop:function(){
    this.V = 0;
    return `current speed: ${this.V}`;
  }
};

function Car(name, maxV, color) {
  this.name = name;
  this.V = 0;
  this.maxV = maxV;
  this.color = color;
}
Car.prototype = carProt;

const car1 = new Car('Lada', 50, 'violet');
console.log(car1.speedUp(1000));
console.log(car1.speedDown(1000));
console.log(car1.speedUp(10));
console.log(car1.speedDown(5));

car1.speedDown(1000);
car1.speedUp(10);
car1.speedDown(5);
car1.fullStop();



let object = {
  key1: "something",
  speak: function(){
    alert('asadsadsa');
  }
}

//створення об'єктів
let hamster1 = {};//літеральний // використовується часто
let hamster2 = Object(); // використовується рідко
let hamster3 = new Object(); // використовується часто


//практика

let phone = {
  mark: "xiomi",
  model: "redmi note 9",
  price: 150,
  color: 'emerald',
  isOff: true,
  phoneRing: function(){
    console.log("дзвін");
  },
  'key one': 1,

}
//проблема з alert == він переводить що виводить до стрінгу перед відображенням 
//не використовувати

const fucn = (anyPhone) => {
  console.log('Телефон '+anyPhone.mark+' '+anyPhone.model+' коштує '+anyPhone.price+'$ ' + 'та він зараз '+ (anyPhone.isOff? 'виключений':'включений'));
}

console.log() // console - об'єкт // .log - його метод

let something = {
  'key one': 132, // something["key one"]
  1 : 133333, //something[1]
  keyLast: 'Oh no'
}
console.log(something["key one"],something[1], something.keyLast)

// [] правильно зазивається "доступ до властивості з можливостю обчислювання" == "property accessors"
// . === "property accessors" === "доступ до властивості?" 

something.some = undefined;
console.log(something.some);

//додання чогось
something.some ="defined";
console.log(something.some);

//видалення чогось (лише для властивостей, змінні так не видалиш)
delete something.some;
console.log(something.some);

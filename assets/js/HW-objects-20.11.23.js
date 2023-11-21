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

phone.price = {
  value: 150,
  curency: "$"
}

console.log("Тож телефон коштує "+phone.price.value+phone.price.curency)

//2

phone.pin = "4565454";
console.log(phone.pin);

//3

delete phone.pin;
console.log(phone.pin);
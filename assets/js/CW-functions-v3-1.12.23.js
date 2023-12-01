//побічні функції
let result;

function sum2(first, second) {
  result = first + second; // змінення змінної = побічний ефект
  return result;
}

function sum2(first, second) {
  let result = first + second;
  console.log(result); // = побічний ефект
  return result;
}

// вищі функції

function hof1(func) {
  if (1 > 0) {
    func();
  }
  return answer;
}

function hof2() {
  const func2 = () => {
    console.log('asdas');
  };
  return func2;
}

// параметр
function top1(bottom = 0) {
  let top = false;
  if (bottom > 0) {
    top = false;
  }

  return top;
}

// arrow function

const fun1 = () => {};

const nonArrowFun1 = function (numb1, numb2) {
  return numb1 + numb2;
};
const arrowFun1 = (numb1, numb2) => {
  return numb1 + numb2;
};
//скорочений запис
const arrowFun2 = (numb1, numb2) => numb1 + numb2;

// arrowFun використовують частіше у callback`ах

const nonArrowFun = function (numb1, numb2) {
  console.log(this); // window-no strict - undifiend-strict
};

const arrowFun = function (numb1, numb2) {
  console.log(this); // window-strict+noStrict
  //!!! немають контексту виконання
  // бере контекст виконання зверху(у скрипта або функції)
};

const shop = {
  name: 'Shop',
  products: [
    {
      name: 'tomato',
      price: 3,
      quantity: 5,
    },
    {
      name: 'tomato2',
      price: 31,
      quantity: 51,
    },
    {
      name: 'tomato3',
      price: 32,
      quantity: 52,
    },
    {
      name: 'tomato4',
      price: 33,
      quantity: 53,
    },
  ],
  displayAllProducts_v1: function () {
    //.forEach запустив анонімну функцію callback`ом від себе через що this втратився|не працює
    this.products.forEach(function (item) {
      console.log(this); //undefined
      console.log(`Product ${item.name} and price ${item.price} and price ${this.price}`);
    });
  },

  //бред
  displayAllProducts_v2: function () {
    const bindedCorectThis = this.tempFunction.bind(this); // просто передаємо this цій функції
    const tempFunction = function(item){
        console.log(`Product ${item.name} and price ${item.price} and price ${this.price}`);
    }
    this.products.forEach(bindedCorectThis)
  },
  
  displayAllProducts_v3: function () {

    this.products.forEach((item) => {
      console.log(`Product ${item.name} and price ${item.price} and price ${this.price}`);
    });
  },
};

// щоб бути конструктором має бути контекст(this) тож стрілкові не можуть бути конструктором


// стрілка не має arguments 
//масивоподобний об'єкт 
// застаріле, краще не використовувати
const havaArguments = function() {
  console.log(arguments);//псевдо масив
}

const doesntHaveArguments = () => {
  console.log(arguments);// нічого
}




// залишкові параметри = rest parameters
function summAll(numb1, numb2, ...restNumb) {
  let numbers = numb1 + numb2;
  restNumb.forEach((number) => {
    numbers += number;
  })
  return numbers;
}

const number1 = [123123,1231,23,123,123,123,12]

const res1 = numbers1.forEach((numb)=>{summAll(numb)});
//spread оператор (викидує усе з коробки у послідовності)
const res2 = summAll(...number1);
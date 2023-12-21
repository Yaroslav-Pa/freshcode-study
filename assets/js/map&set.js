// map = карта, словник, асоціативний масив

// map це набір елементів з пар ключів та значень
// map vs object === ключ в об'єкті = string or Symbol, у мапі усе
// map знає свій розмір та що як клалось у неї
// map спеціально оптимізований для покладання видалення з неї

// Використовується для:
// щось знайти, видалити, додати, користуватись ітератором

//створити
const map1 = new Map(); //створити мапу

//додати // оновлення
map1.set(1, 45); //додати щось у мапу
map1.set(113, 43335); //додати щось у мапу
// мапа буде замінювати значення за цим ключем якщо його знчення вже записано

//отримати
map1.get(1); //отримати значення за ключем

//шукати
map1.has(1); //шукати чи є true
map1.has(1123); //шукати чи є false

// видаляти (не повертає що видалив)
map1.delete(1);
// видаляти все(не повертає що видалив)
map1.clear();

// map має .forEach() такий ж як у масиву

//інші === keys values entrys

const vocabulary = new Map();

vocabulary.set('cat', 'кіт');
vocabulary.set('gray', 'сірий');
vocabulary.set('mouse', 'миша');
vocabulary.set('hunt', 'полювання');
vocabulary.set('vase', 'ваза');
vocabulary.set('broke', 'зламала');
vocabulary.set('but', 'але');
vocabulary.set('pickaxe', 'кайло');
vocabulary.set('with', 'з допомогою');

const testString = 'Cat hunted mouse but broke pickaxe with vase';

const translate = (str) => {
  let words = str.toLowerCase().split(' ');
  let translatedWords = [];
  for (let word of words) {
    vocabulary.has(word)
      ? translatedWords.push(vocabulary.get(word))
      : translatedWords.push(word);
  }
  return translatedWords.join(' ');
};
const translate2 = (str, vocab = vocabulary) => 
  str
    .toLowerCase()
    .split(' ')
    .map((word) => vocab.has(word) ? vocab.get(word) : word)
    .join(' ');
  // let words = str.toLowerCase().split(' ');
  // let translatedWords = [];
  // for (let word of words) {
  //   vocabulary.has(word)
  //     ? translatedWords.push(vocabulary.get(word))
  //     : translatedWords.push(word);
  // }
  // return translatedWords.join(' ');


  const iter = map1.keys(); //повертає ітератор що буде повертати усі ключи по одному
  const iter2 = map1.values(); //повертає ітератор що буде повертати усі value по одному
  
  // можна просто з ними подивитись усі значення
  // for (const soms of iter2){
  //   console.log(soms);
  // }

  const iter3 = map1.entries(); //повертає ітератор що буде повертати кожен елемент з усіма його даними (у вигляді кортежей)
  for (const entry of map1.entries()){
    // console.log(entry); // приклад tuple (кортеж) - масив з чітко визначиними розміром і чітко визначиним роіменням даних у них
    const key = entry[0];
    const value = entry[1];
  }
  // !! стандартний ітератор map працює як .entries()
  // map1 = map1.entries()
  for (const entry of map1){
    // console.log(entry); 
  }

  
  // заповнення мапи 

  const newMap1 = new Map([
    ['key1', 'value1']
    ['key2', 'value2']
  ])
  const newMap2 = new Map([...newMap1])
























  // Set = множина
  // колекція яка тримає в середені УНІКАЛЬНІ значення 

  //створити
  const set1 = new Set(); //створити set
  const set2 = new Set(['banana','bananana','ba','banan']); //створити не пустий set (потрібно передати об'єкт у якому є ітератор)

  //додати
  set1.add(45); //додати щось у set
  set1.add(113); //додати щось у set
  // set не може мати знчення що вже записано

  //отримати
  // set1.get(1); //не тримати бо немає ключів у значень
  //не дуже зручна алтернатива
  // for (const name of set2){
  //   if(name === 'ba'){
  //     return name;
  //   }
  // }

  //шукати
  const answerSet1 = set1.has(1); //шукати чи є true

  // видаляти
  set1.delete(1);
  // видаляти все
  set1.clear();

  

  const arr1 = ['Kain','Andre', 'Koil', 'Kain'];
  const arr2 = ['Kain1','Andre', 'Koil1', 'Kain1'];
  
  const answerArr = [...new Set([...arr1,...arr2])]
  console.log(answerArr);

  // set2.forEach((value, index, set)=>{
  //   console.log(`${value} === ${index}`)// index у set === value *вони однакові для уніфікування (просто удобно)
  // })
  

  const iterSet1 = set2.keys(); //повертає ітератор що буде повертати усі value по одному бо ключів немає
  const iterSet2 = set2.values(); //повертає ітератор що буде повертати усі value по одному
  const iterSet3 = set2.entries(); //повертає ітератор що буде повертати кожен елемент з усіма його даними (у вигляді кортежей) (усі ключі === value)
  for (const entry of set2.entries()){
    // console.log(entry); // приклад tuple (кортеж) - масив з чітко визначиними розміром і чітко визначиним роіменням даних у них
    const key = entry[0];
    const value = entry[1];
  }













  // такеж саме з .keys .values .entries працює й з об'єктом:
  //*але потрібно звертатись до самого конструктора Object

  const testObjs={
    'key': 'ke1',
    'key2': 'ke11',
    'key3': 'ke12',
  }

  const keysObjctIter = Object.keys(testObjs);
  const valuesObjctIter = Object.values(testObjs);
  const entriesObjctIter = Object.entries(testObjs);



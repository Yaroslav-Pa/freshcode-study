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

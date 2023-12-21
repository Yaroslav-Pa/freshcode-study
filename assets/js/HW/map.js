const str = ' якийсь .,рядок -1 так 123123123';

const countAllLetters = (string, ignore = [',', '.', ' '], map = new Map()) => {
  let letters = string.split('');
  for (let letter of letters) {
    if (!ignore.includes(letter)) {
      if (map.has(letter)) {
        map.set(letter, map.get(letter) + 1);
      } else {
        map.set(letter, 1);
      }
    }
  }
  return map;
};

const countAllLetters2 = (string, ignore = [',', '.', ' '], map = new Map()) => {
  string.split('').forEach((letter) => {
    if (!ignore.includes(letter)) {
      map.has(letter)
        ? map.set(letter, map.get(letter) + 1)
        : map.set(letter, 1);
    }
  });
  return map;
};

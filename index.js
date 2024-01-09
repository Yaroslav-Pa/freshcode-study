/*
  відмалювати параграф зі стилями та текстом у діві
*/
const root = document.getElementById('root');

const par = document.createElement('p');
par.classList.add('text');
par.textContent = 'some text';

root.append(par);
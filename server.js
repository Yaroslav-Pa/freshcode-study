const express = require('express');
const { validateRegistrationMW } = require('./middlewares/user.mw');
const { getUsers, createUser } = require('./controllers/userController');

// екземпляр експресівського серверу
const app = express();

// app містить функції які відповідають всім методам HTTP запиту
// ендпоінт (шлях, ручка) - певний шлях на сервері (/users) з певним HTTP методом
app.get('/users', getUsers);

app.get(
  '/test',
  (req, res, next) => {
    console.log('first callback');

    req.abracadabra = 'magic trick';

    // функція яка сигналізує що можна переходити
    // на наступний обробник
    next();
  },
  (req, res, next) => {
    console.log('second callback');
    console.log(req.abracadabra);

    if (Math.random() > 0.5) {
      next();
    } else {
      res.send('ERROR happened');
    }
  },
  (req, res) => {
    console.log('third callback');
    res.send('all done');
  }
);

/*
  1. отримати дані користувача з запиту
  2. перевірити дані
  3. зберігти дані (потім у БД)
  4. створити сесію для користувача
  5. відправити дані на кліент

*/

// міддлвер для обробки JSON у запитах
const bodyParserMiddleware = express.json();

app.post('/users', bodyParserMiddleware, validateRegistrationMW, createUser);

// будь-який GET запит
app.get('*', (request, response) => {
  console.log('users requested');

  // response.end(JSON.stringify(users));
  response.send('test');
});
// app.post();
// app.put();
// app.delete();

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  // коллбек стартує після успішного запуску сервера
  console.log(`Server started on ${HOST}:${PORT}`);
});

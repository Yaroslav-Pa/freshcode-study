const express = require('express');
const { validateRegistrationMW } = require('../middlewares/user.mw');
//router express має методи app
const router = express.Router()
// міддлвер для обробки JSON у запитах
const bodyParserMiddleware = express.json();
const { getUsers, createUser, findOne, deleteOne, updateUser } = require('../controllers/userController');
// app містить функції які відповідають всім методам HTTP запиту
// ендпоінт (шлях, ручка) - певний шлях на сервері (/users) з певним HTTP методом
router.get('/users', getUsers);
router.get('/users/:id', findOne);
router.delete('/users/:id', deleteOne);
router.put('/users/:userId',bodyParserMiddleware, updateUser );
router.post('/users', bodyParserMiddleware, validateRegistrationMW, createUser);
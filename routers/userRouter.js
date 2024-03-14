const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const paginationMW = require('../middlewares/pagination');
const { findUser } = require('../middlewares/userMW');
const todoRouter = require('./todoRouter');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', findUser, UserController.getUser);
userRouter.put('/:userId', findUser, UserController.updateUser);
userRouter.delete('/:userId', findUser, UserController.deleteUser);

userRouter.use('/:userId/todos', findUser, todoRouter);

module.exports = userRouter;
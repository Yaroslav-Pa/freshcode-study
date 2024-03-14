const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const TodoController = require('../controllers/todoController');
const paginationMW = require('../middlewares/pagination');
const { findUserMW } = require('../middlewares/userMW');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', findUserMW, UserController.getUser);
userRouter.put('/:userId', findUserMW, UserController.updateUser);
userRouter.delete('/:userId', findUserMW, UserController.deleteUser);

userRouter.post('/:userId/todos', findUserMW, TodoController.createTodo);
userRouter.get('/:userId/todos', findUserMW, TodoController.getUserTodos);

userRouter.get('/:userId/todos/:todoId', findUserMW, TodoController.getTodo);
userRouter.put('/:userId/todos/:todoId', findUserMW, TodoController.updateTodo);
userRouter.delete(
  '/:userId/todos/:todoId',
  findUserMW,
  TodoController.deleteTodo
);

module.exports = userRouter;

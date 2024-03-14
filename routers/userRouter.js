const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const TodoController = require('../controllers/todoController');
const paginationMW = require('../middlewares/pagination');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

userRouter.post('/:userId/todos', TodoController.createTodo);

module.exports = userRouter;

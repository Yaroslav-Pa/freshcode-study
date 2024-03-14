const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const TodoController = require('../controllers/todoController');
const OrderController = require('../controllers/orderController');
const paginationMW = require('../middlewares/pagination');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

userRouter.post('/:userId/todos', TodoController.createTodo);
userRouter.get('/:userId/orders', paginationMW, OrderController.getOrders);
userRouter.post('/:userId/orders', OrderController.createOrder);

module.exports = userRouter;

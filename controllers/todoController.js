const { Todo, User } = require('../models');

module.exports.createTodo = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;

    // v1 старий нецікавий метод
    // const todo = await Todo.create({...body, userId});

    // v2 додамо магії
    const user = await User.findByPk(userId);

    const todo = await user.createTodo(body);

    res.send({data: todo});
  } catch (error) {
    next(error);
  }
};

module.exports.getTodos = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const { Order, User } = require('../models');

module.exports.createOrder = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const user = await User.findByPk(id);
    const order = await user.createOrder(body);
    res.send({ data: order });
  } catch (error) {next(error);}
};


module.exports.getOrders = async (req, res, next) => {
  try {
    const {
      pagination,
    } = req;
    const orders = await Order.findAll({
      ...pagination,
    });
    res.send({ data: orders });
  } catch (error) {
    next(error);
  }
};
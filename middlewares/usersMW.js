const createError  = require('http-errors');
const { User } = require('../models');

module.exports.findUser = async (req, res, next) => {
  try {
    const {params: {userId}} = req;

    const user = await User.findByPk(userId);

    if(!user) {
      // throw new Error('User not found');
      const error = createError(404, 'User not found');
      throw error;
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
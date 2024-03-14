const { User } = require('../models/user');

module.exports.findUserMW = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findByPK(userId);
    if (!user) {
      next('User not found');
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

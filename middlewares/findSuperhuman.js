const { Superhuman } = require('../db/models');
const createError  = require('http-errors');

module.exports.findSuperhumanMW = async (req, res, next) => {
  try {
    const {
      params: { superhumanId },
    } = req;
    const superhuman = await Superhuman.findByPk(superhumanId);
    
    if(!superhuman) {
      const error = createError(404, 'Superhuman not found');
      throw error;
    }

    req.superhuman = superhuman;
    next();
  } catch (error) {
    next(error);
  }
};
const { Superpower } = require('../db/models');
const createError = require('http-errors');

module.exports.findSuperpowerMW = async (req, res, next) => {
  try {
    const {
      params: { superpowerId },
    } = req;

    const superpower = await Superpower.findByPk(superpowerId);

    if (!superpower) {
      const error = createError(404, 'Superpower not found');
      throw error;
    }

    req.superpower = superpower;
    next();
  } catch (error) {
    next(error);
  }
};

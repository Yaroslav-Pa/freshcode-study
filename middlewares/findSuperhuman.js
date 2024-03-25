const { Superhuman, Superpower, Image } = require('../db/models');
const createError = require('http-errors');

module.exports.findSuperhumanMW = async (req, res, next) => {
  try {
    const {
      params: { superhumanId },
    } = req;
    const superhuman = await Superhuman.findByPk(superhumanId, {
      include: [
        {
          model: Superpower,
          attributes: { exclude: ['updatedAt', 'createdAt', 'superhumanId'] },
        },
        {
          model: Image,
          through: { attributes: [] },
          attributes: { exclude: ['updatedAt', 'createdAt'] },
        },
      ],
    });

    if (!superhuman) {
      const error = createError(404, 'Superhuman not found');
      throw error;
    }

    req.superhuman = superhuman;
    next();
  } catch (error) {
    next(error);
  }
};

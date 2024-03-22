const { Superhuman } = require('../db/models');

module.exports.getAll = async (req, res, next) => {
  try {
    const superhumans = await Superhuman.findAll();
    res.status(200).send({ data: superhumans });
  } catch (error) {
    next(error);
  }
};

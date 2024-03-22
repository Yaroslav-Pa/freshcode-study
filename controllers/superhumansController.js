const { Superhuman } = require('../db/models');

module.exports.getSuperhumans = async (req, res, next) => {
  try {
    const superhumans = await Superhuman.findAll();
    res.status(200).send({ data: superhumans });
  } catch (error) {
    next(error.message);
  }
};

module.exports.getSuperhuman = async (req, res, next) => {
  try {
    const { superhuman } = req;
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.createSuperhuman = async (req, res, next) => {
  try {
    const { body } = req;
    const superhuman = await Superhuman.create(body);
    res.status(201).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperhuman = async (req, res, next) => {
  try {
    const { superhuman, body } = req;
    const updatedSuperhuman = await superhuman.update(body, {
      returning: true,
    });
    res.status(200).send({ data: updatedSuperhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperhuman = async (req, res, next) => {
  try {
    const { superhuman } = req;
    await superhuman.destroy();
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

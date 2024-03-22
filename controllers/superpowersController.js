const { Superpower } = require('../db/models');

module.exports.getSuperpowers = async (req, res, next) => {
  try {
    const superpowers = await Superpower.findAll();
    res.status(200).send({ data: superpowers });
  } catch (error) {
    next(error.message);
  }
};

module.exports.getSuperpower = async (req, res, next) => {
  try {
    const { superpower } = req;
    res.status(200).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body } = req;
    const superpower = await Superpower.create(body);
    res.status(201).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperpower = async (req, res, next) => {
  try {
    const { superpower, body } = req;
    const updatedSuperpower = await superpower.update(body, {
      returning: true,
    });
    res.status(200).send({ data: updatedSuperpower });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  try {
    const { superpower } = req;
    await superpower.destroy();
    res.status(200).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

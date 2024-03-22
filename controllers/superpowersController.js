const { Superhuman, Superpower } = require('../db/models');

module.exports.getAllSuperpowers = async (req, res, next) => {
  try {
    const superpowers = await Superpower.findAll();
    res.status(200).send({ data: superpowers });
  } catch (error) {
    next(error.message);
  }
};
module.exports.getSuperpowers = async (req, res, next) => {
  try {
    const { superhuman } = req;
    const superpowers = await superhuman.getSuperpowers();
    res.status(200).send({ data: superpowers });
  } catch (error) {
    next(error.message);
  }
};

module.exports.getSuperpower = async (req, res, next) => {
  try {
    const {
      superhuman,
      params: { superpowerId },
    } = req;
    const superpower = await Superpower.findOne({
      where: { id: superpowerId, superhuman_id: superhuman.id },
    });
    res.status(200).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { superhuman, body } = req;
    const superpower = await superhuman.createSuperpower(body);
    res.status(201).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperpower = async (req, res, next) => {
  try {
    const { superhuman, body, params: { superpowerId },} = req;
    const superpower = await Superpower.findOne({
      where: { id: superpowerId, superhuman_id: superhuman.id },
    });
    const updatedSuperpower = await superpower.update(body);
    res.status(200).send({ data: updatedSuperpower });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  try {
    const {
      superhuman,
      params: { superpowerId },
    } = req;
    const superpower = await superhuman.removeSuperpower(superpowerId);
    res.status(200).send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

const { CREATION_SCHEMA:CREATION_SUPERHUMAN, EDIT_SCHEMA:EDIT_SUPERHUMAN } = require('../validation/superhuman');
const { CREATION_SCHEMA:CREATION_SUPERPOWER, EDIT_SCHEMA:EDIT_SUPERPOWER } = require('../validation/superpower');

module.exports.validateCreationSuperhumanMW = async (req, res, next) => {
  try {
    await CREATION_SUPERHUMAN.validate(req.body);
    next();
  } catch (err) {
    next(err.message);
  }
};
module.exports.validateEditSuperhumanMW = async (req, res, next) => {
  try {
    await EDIT_SUPERHUMAN.validate(req.body);
    next();
  } catch (err) {
    next(err.message);
  }
};

module.exports.validateCreationSuperpowerMW = async (req, res, next) => {
  try {
    await CREATION_SUPERPOWER.validate(req.body);
    next();
  } catch (err) {
    next(err.message);
  }
};
module.exports.validateEditSuperpowerMW = async (req, res, next) => {
  try {
    await EDIT_SUPERPOWER.validate(req.body);
    next();
  } catch (err) {
    next(err.message);
  }
};
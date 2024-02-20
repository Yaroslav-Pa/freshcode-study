const { BOOK_SCHEMA_CREATE, BOOK_SCHEMA_UPDATE } = require('../validator');

module.exports.validateBookCreateMW = async (req, res, next) => {
  try {
    req.book = await BOOK_SCHEMA_CREATE.validate(req.body);
    next();
  } catch (err) {
    next(err.message);
  }
};
module.exports.validateBookUpdateMW = async (req, res, next) => {
  try {
    req.book = await BOOK_SCHEMA_UPDATE.validate(req.body);
    next();
  } catch (err) {
    next(err.message);
  }
};
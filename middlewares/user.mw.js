const { REGISTRATION_SCHEMA } = require('../validation/userSchemas');

module.exports.validateRegistrationMW = (req, res, next) => {
  REGISTRATION_SCHEMA.validate(req.body)
    .then((validatedUser) => {
      req.user = validatedUser;
      next();
    })
    .catch((err) => {
      res.send(err.message);
    });
};

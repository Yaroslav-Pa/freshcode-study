const yup = require('yup');

module.exports.REGISTRATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  gender: yup.string()
});

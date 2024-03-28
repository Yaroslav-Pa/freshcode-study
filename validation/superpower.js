const yup = require('yup');

module.exports.CREATION_SCHEMA = yup.object({
  powerName: yup.string().min(3).max(100).required(),
  powerDescription: yup.string(),
});
module.exports.EDIT_SCHEMA = yup.object({
  powerName: yup.string().min(3).max(100),
  powerDescription: yup.string(),
});

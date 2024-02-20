const yup = require('yup');
module.exports.BOOK_SCHEMA_CREATE = yup.object({
  name: yup.string().min(2).max(32).required(),
  author: yup.string().min(2).max(32).required(),
  description: yup.string().max(120),
  numberOfPages: yup.number(),
  cost: yup.number().required(),
  inStock: yup.boolean().required(),
})
module.exports.BOOK_SCHEMA_UPDATE = yup.object({
  name: yup.string().min(2).max(32),
  author: yup.string().min(2).max(32),
  description: yup.string().max(120),
  numberOfPages: yup.number(),
  cost: yup.number(),
  inStock: yup.boolean(),
})
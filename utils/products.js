const _ = require('lodash');
const generationConfig = require('../config/productsGeneration.json');

const {
  productAmount,
  minPrice,
  maxPrice,
  minQuantity,
  maxQuantity,
  names,
  descriptions,
  categories,
  manufacturers,
} = generationConfig;

const generateProduct = (index) => {
  const name = `${names[_.random(0, names.length - 1)]} ${index}`;
  const category = categories[_.random(0, categories.length - 1)];
  const description = `${
    descriptions[_.random(0, descriptions.length - 1)]
  } ${index}`;
  const manufacturer = manufacturers[_.random(0, manufacturers.length - 1)];
  const price = _.random(minPrice, maxPrice);
  const quantity = _.random(minQuantity, maxQuantity);

  return `('${name}','${category}', '${description}', '${manufacturer}', ${price}, ${quantity})`;
};

module.exports.generateProducts = (amount = productAmount) =>
  new Array(amount)
    .fill(null)
    .map((x, index) => generateProduct(index + 1))
    .join(',');

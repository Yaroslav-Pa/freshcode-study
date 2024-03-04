const _ = require('lodash');
const generationConfig = require('../config/ordersGeneration.json');

const {
  minOrders,
  maxOrders,
  minProductQuantity,
  maxProductQuantity,
  maxProductsInOrder,
  minProductsInOrder,
  statuses,
} = generationConfig;

const generateOrder = (user) => {
  const status = statuses[_.random(0, statuses.length - 1)];

  return `(${user.id}, '${status}')`;
};

const generateProductToOrder = ({ productId, orderId }) => {
  const quantity = _.random(minProductQuantity, maxProductQuantity);

  return `(${productId}, ${orderId}, ${quantity})`;
};

module.exports.generateOrders = (users) =>
  users
    .map((user) =>
      new Array(_.random(minOrders, maxOrders))
        .fill(null)
        .map(() => generateOrder(user))
        .join(',')
    )
    .join(',');

module.exports.generateProductsToOrders = ({ orders, products }) =>
  orders
    .map((order) => {
      const productsInOrder = new Array(
        _.random(minProductsInOrder, maxProductsInOrder)
      )
        .fill(null)
        .map(() => products[_.random(0, products.length - 1)]);

      const uniqueProductsInOrder = [...new Set(productsInOrder)];

      return uniqueProductsInOrder
        .map((product) =>
          generateProductToOrder({
            productId: product.id,
            orderId: order.id,
          })
        )
        .join(',');
    })
    .join(',');

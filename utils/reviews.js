const _ = require('lodash');
const generationConfig = require('../config/reviewsGeneration.json');

const {
  minRating,
  maxRating,
  ratingThresholds: { maxNegative, minPositive },
  reviewChance,
  descriptions: { positive, negative, neutral },
} = generationConfig;

module.exports.generateReviewsMap = (orders, productsToOrdersResult) => {
  const reviewsMap = new Map();

  let currentReviewId = 1;

  for (const order of orders) {
    for (const pto of productsToOrdersResult) {
      if (pto.order_id === order.id && _.random(0, 100) <= reviewChance) {
        const rating = _.random(minRating, maxRating, true);

        let body;

        if (rating <= maxNegative) {
          body = negative[_.random(0, negative.length - 1)];
        } else if (rating >= minPositive) {
          body = positive[_.random(0, positive.length - 1)];
        } else {
          body = neutral[_.random(0, neutral.length - 1)];
        }

        const fullReviewObj = {
          userId: order.user_id,
          productId: pto.product_id,
          orderId: order.id,
          body,
          reviewId: currentReviewId,
          ratingId: currentReviewId,
          rating,
        };

        currentReviewId++;

        if (reviewsMap.has(order.id)) {
          const orderReviewsArr = reviewsMap.get(order.id);

          orderReviewsArr.push(fullReviewObj);
        } else {
          reviewsMap.set(order.id, [fullReviewObj]);
        }
      }
    }
  }

  return reviewsMap;
};

const generateReview = (review) =>
  `(${review.userId}, ${review.productId}, ${review.ratingId}, '${review.body}')`;

module.exports.generateReviews = (reviewsMap) => {
  const reviewsArr = [];

  for (const orderReviewsArr of reviewsMap.values()) {
    const orderReviewsString = orderReviewsArr
      .map((review) => generateReview(review))
      .join(',');

    reviewsArr.push(orderReviewsString);
  }

  return reviewsArr.join(',');
};

const generateRating = (review) => `(${review.reviewId}, ${review.rating})`;

module.exports.generateRatings = (reviewsMap) => {
  const ratingsArr = [];

  for (const orderReviewsArr of reviewsMap.values()) {
    const orderRatingsString = orderReviewsArr
      .map((review) => generateRating(review))
      .join(',');

    ratingsArr.push(orderRatingsString);
  }

  return ratingsArr.join(',');
};

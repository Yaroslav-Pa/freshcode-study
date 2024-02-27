const _ = require('lodash');
const {
  minBalance,
  maxBalance,
  isFloatBalance,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  minComments,
  maxComments,
} = require('../config/usersGeneration.json');

function mapUser(u) {
  const {
    name: { first, last },
    email,
    dob: { date: birthday },
    gender,
  } = u;

  const isMale = gender === 'male';

  const balance = _.random(minBalance, maxBalance, isFloatBalance);

  const height = _.random(minHeight, maxHeight);
  const weight = _.random(minWeight, maxWeight);
  const comments = _.random(minComments, maxComments);

  return `('${first}', '${last}', '${email}', ${isMale}, ${balance}, ${height}, ${weight}, ${comments}, '${birthday}')`;
}

const mapUsers = (usersArr) => usersArr.map((user) => mapUser(user)).join(',');

module.exports.mapUsers = mapUsers;

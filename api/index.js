const axios = require('axios');
const {results, seed, baseURL} = require('../config/api.json');

const httpClient = axios.create({
  baseURL,
});

module.exports.getUsers = async (options) => {

  const axiosResponse = await httpClient.get(`?results=${results}&seed=${seed}`);

  const { data: { results: users } } = axiosResponse;

  return users;
}
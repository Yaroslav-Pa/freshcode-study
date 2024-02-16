const User = require('../models/User')


module.exports.getUsers = async (request, response) => {
  console.log('users requested');
  const users = await User.findAll();
  // response.end(JSON.stringify(users));
  response.send(users);
}
module.exports.findOne = async (request, response) => {
  console.log('user requested');
  const {id} = request.params;
  const users = await User.findOne(+id);
  response.send(users);
}
module.exports.deleteOne = async (request, response) => {
  console.log('user delete');
  const {id} = request.params;
  const users = await User.delete(+id);
  response.send(users);
}
module.exports.updateUser = async (req, res) => {
  const {params: {userId}, body} = req;

  const updatedUser = await User.update(+userId, body);

  res.send(updatedUser);
}

module.exports.createUser = async (req, res, next) => {
  const newUser = await User.create(req.user);

  res.send(users);
}
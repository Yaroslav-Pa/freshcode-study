
module.exports.createUser = async (req, res, next) => {
  try {
    res.send('user created');
  } catch (error) {
    next(error);
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    res.send('user data');
  } catch (error) {
    next(error);
  }
}

module.exports.getUsers = async (req, res, next) => {
  try {
    res.send('full user list');
  } catch (error) {
    next(error);
  }
}

module.exports.updateUser = async (req, res, next) => {
  try {
    res.send('user updated');
  } catch (error) {
    next(error);
  }
}

module.exports.deleteUser = async (req, res, next) => {
  try {
    res.send('user deleted');
  } catch (error) {
    next(error);
  }
}
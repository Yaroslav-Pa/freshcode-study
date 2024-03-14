module.exports = async (err, req, res, next) => {

  res.send({ errors : [{
    message: err.message
  }]});
}
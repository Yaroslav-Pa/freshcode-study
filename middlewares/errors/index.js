module.exports = async (err, req, res, next) => {
  req.send({
    errors: [
      {
        message: err.message,
      },
    ],
  });
};

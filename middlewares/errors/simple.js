async function handleErrorS (err, req, res, next){
  res.send(`ERROR: ${err}`)
};

module.exports = handleErrorS;
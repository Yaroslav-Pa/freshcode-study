const superRouter = require('./superhumans');
const router = require('express').Router();

router.use('/superhumans', superRouter);

module.exports = router;
const superhumanRouter = require('./superhumans');
const superpowerRouter = require('./superpowers');
const router = require('express').Router();

router.use('/superhumans', superhumanRouter);
router.use('/superpowers', superpowerRouter);

module.exports = router;
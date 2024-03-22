const superhumanRouter = require('./superhumans');
const SuperpowerController = require('../controllers/superpowersController');
const router = require('express').Router();

router.use('/superhumans', superhumanRouter);
router.get('/superpowers', SuperpowerController.getAllSuperpowers);

module.exports = router;
const superRouter = require('express').Router();
const SuperhumansController = require('../controllers/superhumansController');

superRouter.get('/', SuperhumansController.getAll);
superRouter.get('/', SuperhumansController.getAll);

module.exports = superRouter;
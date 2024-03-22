const superRouter = require('express').Router();
const { findSuperhumanMW } = require('../middlewe/findSuperhuman');
const SuperhumansController = require('../controllers/superhumansController');

superRouter.get('/', SuperhumansController.getSuperhumans);
superRouter.put('/', SuperhumansController.createSuperhuman);
superRouter.get(
  '/:superhumanId',
  findSuperhumanMW,
  SuperhumansController.getSuperhuman
);
superRouter.put(
  '/:superhumanId',
  findSuperhumanMW,
  SuperhumansController.updateSuperhuman
);
superRouter.delete(
  '/:superhumanId',
  findSuperhumanMW,
  SuperhumansController.deleteSuperhuman
);

module.exports = superRouter;

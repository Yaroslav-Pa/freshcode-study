const superhumanRouter = require('express').Router();
const { findSuperhumanMW } = require('../middlewares/findSuperhuman');
const SuperhumansController = require('../controllers/superhumansController');

superhumanRouter.get('/', SuperhumansController.getSuperhumans);
superhumanRouter.put('/', SuperhumansController.createSuperhuman);
superhumanRouter.get(
  '/:superhumanId',
  findSuperhumanMW,
  SuperhumansController.getSuperhuman
);
superhumanRouter.put(
  '/:superhumanId',
  findSuperhumanMW,
  SuperhumansController.updateSuperhuman
);
superhumanRouter.delete(
  '/:superhumanId',
  findSuperhumanMW,
  SuperhumansController.deleteSuperhuman
);

module.exports = superhumanRouter;

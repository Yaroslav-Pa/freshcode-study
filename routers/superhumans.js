const superhumanRouter = require('express').Router();
const superpowerRouter = require('./superpowers');
const { findSuperhumanMW } = require('../middlewares/findSuperhuman');
const { findSuperpowerMW } = require('../middlewares/findSuperpower');
const SuperhumansController = require('../controllers/superhumansController');
const SuperpowerController = require('../controllers/superpowersController');

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

superhumanRouter.use(
  '/:superhumanId/superpowers/',
  findSuperhumanMW,
  superpowerRouter
);

// superhumanRouter.get(
//   '/:superhumanId/superpower/',
//   findSuperhumanMW,
//   SuperpowerController.getSuperpowers
// );
// superhumanRouter.get(
//   '/:superhumanId/superpower/:superpowerId',
//   findSuperhumanMW,
//   SuperpowerController.getSuperpower
// );
// superhumanRouter.put(
//   '/:superhumanId/superpower/:superpowerId',
//   findSuperhumanMW,
//   SuperpowerController.createSuperpower
// );
// superhumanRouter.delete(
//   '/:superhumanId/superpower/:superpowerId',
//   findSuperhumanMW,
//   SuperpowerController.deleteSuperpower
// );

module.exports = superhumanRouter;

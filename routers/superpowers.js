const superpowerRouter = require('express').Router();
const { findSuperhumanMW } = require('../middlewares/findSuperhuman');
const { findSuperpowerMW } = require('../middlewares/findSuperpower');
const SuperpowerController = require('../controllers/superpowersController');

superpowerRouter.get(
  '/',
  SuperpowerController.getSuperpowers
);
superpowerRouter.put(
  '/',
  SuperpowerController.createSuperpower
);
superpowerRouter.get(
  '/:superpowerId',
  SuperpowerController.getSuperpower
);
superpowerRouter.delete(
  '/:superpowerId',
  SuperpowerController.deleteSuperpower
);
superpowerRouter.put(
  '/:superpowerId',
  SuperpowerController.updateSuperpower
);

module.exports = superpowerRouter;

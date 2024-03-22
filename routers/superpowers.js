const superpowerRouter = require('express').Router();
const { findSuperpowerMW } = require('../middlewares/findSuperpower');
const SuperpowerController = require('../controllers/superpowersController');

superpowerRouter.get('/', SuperpowerController.getSuperpowers);
superpowerRouter.put('/', SuperpowerController.createSuperpower);
superpowerRouter.get(
  '/:superpowerId',
  findSuperpowerMW,
  SuperpowerController.getSuperpower
);
superpowerRouter.put(
  '/:superpowerId',
  findSuperpowerMW,
  SuperpowerController.updateSuperpower
);
superpowerRouter.delete(
  '/:superpowerId',
  findSuperpowerMW,
  SuperpowerController.deleteSuperpower
);

module.exports = superpowerRouter;

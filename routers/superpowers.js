const superpowerRouter = require('express').Router();
const SuperpowerController = require('../controllers/superpowersController');
const { validateCreationSuperpowerMW, validateEditSuperpowerMW } = require('../middlewares/validate');

superpowerRouter.get(
  '/',
  SuperpowerController.getSuperpowers
);
superpowerRouter.put(
  '/',
  validateCreationSuperpowerMW,
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
  validateEditSuperpowerMW,
  SuperpowerController.updateSuperpower
);

module.exports = superpowerRouter;

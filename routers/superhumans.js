const superhumanRouter = require('express').Router();
const superpowerRouter = require('./superpowers');
const { findSuperhumanMW } = require('../middlewares/findSuperhuman');
const SuperhumansController = require('../controllers/superhumansController');
const imageUpload = require('../utils/fileUtils/images');

superhumanRouter.get('/', SuperhumansController.getSuperhumans);
superhumanRouter.put(
  '/',
  imageUpload.single('picture'),
  SuperhumansController.createSuperhuman
);
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

superhumanRouter.get(
  '/:superhumanId/picture',
  findSuperhumanMW,
  SuperhumansController.getPictures
);
superhumanRouter.put(
  '/:superhumanId/picture',
  imageUpload.single('picture'),
  findSuperhumanMW,
  SuperhumansController.addPicture
);

superhumanRouter.use(
  '/:superhumanId/superpowers/',
  findSuperhumanMW,
  superpowerRouter
);

module.exports = superhumanRouter;

const path = require('path');
const fs = require('fs');
const superhumanRouter = require('express').Router();
const superpowerRouter = require('./superpowers');
const { findSuperhumanMW } = require('../middlewares/findSuperhuman');
const SuperhumansController = require('../controllers/superhumansController');
const multer = require('multer');

const imagesPath = path.resolve(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

superhumanRouter.get('/', SuperhumansController.getSuperhumans);
superhumanRouter.put('/', upload.single('picture'), SuperhumansController.createSuperhuman);
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
  upload.single('picture'),
  findSuperhumanMW,
  SuperhumansController.addPicture
);

superhumanRouter.use(
  '/:superhumanId/superpowers/',
  findSuperhumanMW,
  superpowerRouter
);

module.exports = superhumanRouter;

const path = require('path');
const fs = require('fs');
const multer = require('multer');
const CONSTANTS = require('../../constants');

const imagesPath = path.resolve(CONSTANTS.PUBLIC_FILE_PATH, 'images');

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

const imageUpload = multer({ storage });

module.exports = imageUpload;
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const imagesPath = path.resolve(__dirname, '..', '..', 'public', 'images');

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
const userRouter = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const UserController = require('../controllers/userController');
const paginationMW = require('../middlewares/pagination');
const { findUser } = require('../middlewares/usersMW');
const todoRouter = require('./todoRouter');

const imagesPath = path.resolve(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  // куди вантажити
  destination: function (req, file, cb) {
    // ~/Documents/fc/2023/PFE-2023-1/lessons/pfe-2023-1-sequelize/public/images
    cb(null, imagesPath);
  },
  // з якой назвою зберігати
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', findUser, UserController.getUser);
userRouter.put('/:userId', findUser, UserController.updateUser);
userRouter.delete('/:userId', findUser, UserController.deleteUser);

userRouter.post(
  '/:userId/pictures',
  upload.single('picture'),
  findUser,
  UserController.addPicture
);

userRouter.use('/:userId/todos', findUser, todoRouter);

module.exports = userRouter;

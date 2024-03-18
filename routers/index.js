const express = require('express');
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');
const router = express.Router();

router.use('/users', userRouter);
router.use('/chats', chatRouter);

module.exports = router;
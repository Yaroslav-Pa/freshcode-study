const chatRouter = require('express').Router();
const ChatConroller = require('../controllers/chatsController');

chatRouter.post('/', ChatConroller.createChat);
chatRouter.get('/', ChatConroller.getChats);

chatRouter.get('/:chatId', ChatConroller.getChat);

module.exports = chatRouter;
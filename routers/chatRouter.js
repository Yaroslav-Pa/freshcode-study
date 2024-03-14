const chatRouter = require('express').Router();
const ChatController = require('../controllers/chatController');

chatRouter.post('/', ChatController.createChat);
chatRouter.get('/', ChatController.getChats);

module.exports = chatRouter;
const { Chat, User } = require('../models');

module.exports.createChat = async (req, res, next) => {
  try {
    const { body:{userId, ...chatData} } = req;

    let user;

    if (userId){
      user = await User.findByPk(userId);
      if(!user){
        throw new Error('User not found');
      }
    }
    const chat = await Chat.create(chatData);

    if(user){
      await chat.addUser(user);
    }

    res.send({ data: chat });
  } catch (error) {
    next(error);
  }
};
module.exports.getChats = async (req, res, next) => {
  try {
    const chats = await Chat.findAll();
    res.send({ data: chats });
  } catch (error) {
    next(error);
  }
};

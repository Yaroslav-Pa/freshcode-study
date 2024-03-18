const { Chat, User } = require('../models');

module.exports.createChat = async (chatData, userId) => {
  let user;

  if (userId) {
    user = await User.findByPk(userId);

    if(!user) {
      throw new Error('User not found');
    }
  }

  const chat = await Chat.create(chatData);

  if(user) {
    // додаємо юзера до чату
    await chat.addUser(user);
  }

  return chat;
}
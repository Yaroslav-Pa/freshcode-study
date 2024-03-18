const { Chat, User } = require('../models');
const { createChat } = require('../services/chat.service');

module.exports.createChat = async (req, res, next) => {
  try {
    const {
      body: { userId, ...chatData },
    } = req;

    const chat = await createChat(chatData, userId);

    res.send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.getChats = async (req, res, next) => {
  try {
    // чати мають повертатися разом з користувачами, які в них знаходяться
    /*
      Нетерпляче завантаження - (Eager Loading) - це JOIN      
    */

    const chats = await Chat.findAll({
      // LEFT JOIN
      // include: User,
      // attributes: [],
      include: [
        {
          model: User,
          required: true, // INNER JOIN
          attributes: ['firstName', 'lastName'], // дані з іншої таблиці (User)
          through: {
            // керує даними зв'язвальної таблиці
            attributes: [],
          },
        },
        // {
        // для під'єдання ще одної моделі
        //   model: Todo
        // }
      ],
    });

    res.send({ data: chats });
  } catch (error) {
    next(error);
  }
};

module.exports.getChat = async (req, res, next) => {
  try {
    const {
      params: { chatId },
    } = req;
    // Ліниве завантаження - (Lazy Loading) - це магічні методи
    const chat = await Chat.findByPk(chatId);

    if (!chat) {
      throw new Error('Chat not found');
    }

    const usersInChat = await chat.getUsers();

    res.send({
      data: {
        chat,
        users: usersInChat,
      },
    });
  } catch (error) {
    next(error);
  }
};

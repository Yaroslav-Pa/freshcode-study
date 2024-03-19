'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      
      Chat.belongsToMany(User, {
        // назва зв'язувальної таблиці
        through: 'users_to_chats',
        // атрибут з ключа зв'зувальної таблиці, пов'язаний з цією моделлю
        foreignKey: 'chatId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Chat.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      imagePath: {
        type: DataTypes.STRING,
        field: 'image_path',
      },
    },
    {
      sequelize,
      modelName: 'Chat',
      tableName: 'chats',
      underscored: true,
    }
  );
  return Chat;
};

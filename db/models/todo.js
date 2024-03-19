'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, {
        foreignKey : 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Todo.init(
    {
      isDone: {
        type: DataTypes.BOOLEAN,
        field: 'is_done',
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: '',
          notNull: true,
        },
      },
      deadline: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      tableName: 'todos',
      underscored: true,
    }
  );
  return Todo;
};

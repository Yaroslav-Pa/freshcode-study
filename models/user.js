'use strict';
const { Model } = require('sequelize');
const { isAfter, addYears } = require( "date-fns");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Todo, {
        foreignKey : 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  User.init(
    // схема об'єкту сутності
    {
      firstName: {
        type: DataTypes.STRING(128),
        // ручне перйменування стовпчика в БД
        field: 'first_name',
        allowNull: false,
        // вілідація моделлю поля
        validate: {
          notEmpty: true,
          notNull: true
        }
      },
      lastName: {
        type: DataTypes.STRING(128),
        field: 'last_name',
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true
        }
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true
        }
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        field: 'is_male',
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isValidDate (value) {
            if(isAfter(new Date(value), addYears(new Date(), -18))) {
              throw new Error('Invalid birthday. User must be adult')
            }
          }
        }
      },
      balance: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: true,
          isNumeric: true,
          min: 0
        }
      },
    },
    // налаштування
    {
      sequelize,
      modelName: 'User',
      underscored: true,
      tableName: 'users',
    }
  );
  return User;
};

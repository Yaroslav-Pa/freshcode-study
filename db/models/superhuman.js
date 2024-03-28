'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhuman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superhuman.hasMany(models.Superpower, {
        foreignKey: 'superhumanId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Superhuman.belongsToMany(models.Image, {
        through: 'superhumans_to_images',
        foreignKey: 'superhumanId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Superhuman.init(
    {
      nickname: {
        type: DataTypes.STRING(100),
        field: 'nickname',
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      realName: {
        type: DataTypes.STRING(100),
        field: 'real_name',
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      originStory: {
        type: DataTypes.TEXT,
        field: 'origin_story',
        validate: {
          notEmpty: true,
        },
      },
      catchPhrase: {
        type: DataTypes.STRING(128),
        field: 'catch_phrase',
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: 'superhumans',
      modelName: 'Superhuman',
    }
  );
  return Superhuman;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhumans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhumans.init({
    nickname: DataTypes.STRING,
    realName: DataTypes.STRING,
    originStory: DataTypes.TEXT,
    catchPhrase: DataTypes.STRING
  }, {
    sequelize,
    tableName:"superhumans",
    modelName: 'Superhumans',
  });
  return Superhumans;
};
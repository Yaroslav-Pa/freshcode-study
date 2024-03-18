'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superpowers.init({
    powerName: DataTypes.STRING,
    powerDescription: DataTypes.STRING
  }, {
    sequelize,
    tableName:"superpowers",
    modelName: 'Superpowers',
  });
  return Superpowers;
};
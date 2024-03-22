'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superpower.init(
    {
      powerName: {
        type: DataTypes.STRING(128),
        field: 'power_name',
        allowNull:false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      powerDescription: {
        type: DataTypes.STRING,
        field: 'power_description',
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: 'superpowers',
      modelName: 'Superpower',
    }
  );
  return Superpower;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsToMany(models.Superhuman, {
        through: 'superhumans_to_images',
        foreignKey: 'imageId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Image.init(
    {
      imageSrc: {
        field: 'image_src',
        allowNull:false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: 'images',
      modelName: 'Image',
    }
  );
  return Image;
};

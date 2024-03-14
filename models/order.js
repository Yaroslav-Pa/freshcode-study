'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
      })
    }
  }
  Order.init({
    orderStatus: {
      type: DataTypes.BOOLEAN,
      field: 'order_status',
      defaultValue: false,
    }
  }, {
    sequelize,
    tableName:'orders',
    modelName: 'Order',
    underscored: true,
  });
  return Order;
};
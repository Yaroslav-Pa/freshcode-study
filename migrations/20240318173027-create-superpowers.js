'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Superpowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      superhumanId: {
        allowNull: false,
        field:'superhuman_id',
        type: Sequelize.NUMBER,
        references:{
          model: 'Superhumans',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      powerName: {
        field:'power_name',
        type: Sequelize.STRING
      },
      powerDescription: {
        field:'power_description',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        field:'create_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field:'update_at',
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Superpowers');
  }
};
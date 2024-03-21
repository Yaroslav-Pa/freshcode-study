'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageSrc: {
        field:'image_src',
        allowNull:false,
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
    await queryInterface.dropTable('images');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superhumans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        field:'nickname',
        allowNull:false,
        type: Sequelize.STRING
      },
      realName: {
        field:'real_name',
        allowNull:false,
        type: Sequelize.STRING
      },
      originStory: {
        field:'origin_story',
        type: Sequelize.TEXT
      },
      catchPhrase: {
        field:'catch_phrase',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        field:'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field:'updated_at',
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superhumans');
  }
};
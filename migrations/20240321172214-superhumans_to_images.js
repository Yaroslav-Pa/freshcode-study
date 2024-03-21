'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('superhumans_to_images', {
      superhumanId: {
        type: Sequelize.INTEGER,
        field: 'superhuman_Id',
        allowNull: false,
        references: {
          model: 'superhumans',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      imageId: {
        type: Sequelize.INTEGER,
        field: 'image_Id',
        references: {
          model: 'images',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        field: 'create_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'update_at',
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superhumans_to_images');
  },
};

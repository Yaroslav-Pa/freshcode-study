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
    await queryInterface.addColumn('users', 'picture_path', Sequelize.TEXT, {
      type: Sequelize.TEXT,
      // allowNull:false,
      // field:"picture_path" // не працює?
    });
    await queryInterface.addConstraint('users', {
      fields: ['picture_path'],
      type: 'check',
      where: {
        picture_path: {
          [Sequelize.Op.ne]: '',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('users', 'picture_path');
  },
};

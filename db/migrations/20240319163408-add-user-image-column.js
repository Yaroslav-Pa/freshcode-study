'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // додати стовпчик
    await queryInterface.addColumn('users', 'picture_path', {
      type: Sequelize.TEXT,
      // allowNull: false,
      // field: 'picture_path' // поки не працює
    });

    // додати обмеження до стовпчика
    await queryInterface.addConstraint('users', {
      fields: ['picture_path'],
      type: 'check',
      where: {
        picture_path : {
          [Sequelize.Op.ne]: ''
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    // видалити стовпчик
    await queryInterface.removeColumn('users', 'picture_path');
  }
};

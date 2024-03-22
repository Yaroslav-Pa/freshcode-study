'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('superhumans_to_images', [
      {
        image_Id: 1,
        superhuman_Id: 1,
        update_at: new Date(),
        create_at: new Date(),
      },
      {
        image_Id: 2,
        superhuman_Id: 2,
        update_at: new Date(),
        create_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('superhumans_to_images', {});
  },
};

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
    await queryInterface.bulkInsert(
      'superhumans',
      [
        {
          nickname: 'Doe',
          real_name: 'John Doe',
          origin_story: null,
          catch_phrase: 'let it go',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          nickname: 'Snow',
          real_name: 'Ho Joiha',
          origin_story: null,
          catch_phrase: 'one two minus one',
          updated_at: new Date(),
          created_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('superhumans', {
      real_name: 'John Doe',
    });
  },
};

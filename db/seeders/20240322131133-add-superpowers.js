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
      'superpowers',
      [
        {
          power_name: 'one-punch',
          superhuman_id: 1,
          power_description: 'he literally can do only one punch in his life',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          power_name: 'icicles',
          superhuman_id: 1,
          power_description:
            'Cant hold it back anymore, Let it go, let it go, Turn away, and slam the door, I dont care what theyre going to say',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          power_name: 'X-Ray Vision',
          superhuman_id: 2,
          power_description:
            'The power to see x-rays. Sub-power of X-Radiation Manipulation and Electromagnetic Vision. Not to be confused with Penetration Vision.',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          power_name: 'Lightning Manipulation',
          superhuman_id: 1,
          power_description:
            'The power to manipulate lightning. Sub-power of Storm Manipulation. Combination of Electrical Phenomena Manipulation and Weather Manipulation. Technique of Electricity Manipulation. Not to be confused with Thunder Manipulation.',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          power_name: 'Golf Mastery',
          superhuman_id: 2,
          power_description:
            'The power to be a master of golf, either innately or through training. Variation of Sport Mastery.',
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
    await queryInterface.bulkDelete('superhumans', {});
  },
};

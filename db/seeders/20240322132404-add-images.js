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
      'images',
      [
        {
          image_src:
            'https://cdn.marvel.com/content/1x/iron_man_spread_part_1-resized.jpg',
          update_at: new Date(),
          create_at: new Date(),
        },
        {
          image_src:
            'https://cdn.marvel.com/content/1x/namor_spread_part_1-resized.jpg',
          update_at: new Date(),
          create_at: new Date(),
        },
        {
          image_src:
            'https://m.media-amazon.com/images/I/81wpqyFWjbL._AC_UF1000,1000_QL80_.jpg',
          update_at: new Date(),
          create_at: new Date(),
        },
        {
          image_src:
            'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/10/human2.jpg',
          update_at: new Date(),
          create_at: new Date(),
        },
        {
          image_src:
            'https://cdn.marvel.com/content/1x/she_hulk_spread-resized.jpg',
          update_at: new Date(),
          create_at: new Date(),
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
    await queryInterface.bulkDelete('images', {});
  },
};

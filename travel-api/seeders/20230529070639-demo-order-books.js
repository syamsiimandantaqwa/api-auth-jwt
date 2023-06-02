'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = [
    {
      user_id: 1,
      bus_id: 2,
      jurusan: "jakarta-semarang",
      tujuan: "semarang",
      jadwal: '2023-06-30',
    },
    {
      user_id: 1,
      bus_id: 1,
      jurusan: "jakarta-bandung",
      tujuan: "depok",
      jadwal: '2023-05-30',
    }];

    await queryInterface.bulkInsert("order_books", data, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("order_books", null, {});
  }
};

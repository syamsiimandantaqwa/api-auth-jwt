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
    const data_jurusan = [
    {
      nama: "jakarta-bandung",
      jurusan_id: 1
    },
    {
      nama: "cirebon-pemalang",
      jurusan_id: 2
    },
    {
      nama: "jakarta-semarang",
      jurusan_id: 3
    }];

    await queryInterface.bulkInsert('jurusans', data_jurusan, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('jurusans', null, {});
  }
};

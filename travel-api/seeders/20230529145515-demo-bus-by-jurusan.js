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
    const data = [{
      jurusan_id: 1,
      bus_id: 2
    },
    {
      jurusan_id: 3,
      bus_id: 2
    },
    {
      jurusan_id: 2,
      bus_id: 2
    }, 
    {
      jurusan_id: 1,
      bus_id: 1
    },
    {
      jurusan_id: 3,
      bus_id: 1
    },
    {
      jurusan_id: 2,
      bus_id: 3
    },
    {
      jurusan_id: 1,
      bus_id: 3
    },
    {
      jurusan_id: 3,
      bus_id: 3
    }];
    await queryInterface.bulkInsert("bus_by_jurusans", data,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("bus_by_jurusans", null,{})
  }
};

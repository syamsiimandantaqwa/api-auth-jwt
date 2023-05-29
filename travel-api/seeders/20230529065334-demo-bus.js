'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // *
    //  * Add seed commands here.
    //  *
    //  * Example:
    //  * await queryInterface.bulkInsert('People', [{
    //  *   name: 'John Doe',
    //  *   isBetaMember: false
    //  * }], {});
    const buses = [{
            bus_id: 1,
            nama_bus: "deddy jaya",
            tarif: 80000
          },
          {
            bus_id: 2,
            nama_bus: "gemilang jaya",
            tarif: 60000
          },
          {
            bus_id: 3,
            nama_bus: "sahabat",
            tarif: 100000
          }];
    
    await queryInterface.bulkInsert("buses", buses, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("buses", null, {});
  }
};

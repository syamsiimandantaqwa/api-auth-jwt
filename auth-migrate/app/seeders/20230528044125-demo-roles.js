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
      roleId: 1,
      name: "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roleId: 2,
      name: "USER",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roleId: 3,
      name: "PM",
      createdAt: new Date(),
      updatedAt: new Date()
    }];

    await queryInterface.bulkInsert("Roles", data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Roles', null, {});
  }
};

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bus_by_jurusans', {
      jurusan_id: {
        type: Sequelize.INTEGER
      },
      bus_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bus_by_jurusans');
  }
};
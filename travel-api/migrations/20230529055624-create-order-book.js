'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_books', {
      user_id: {
        type: Sequelize.INTEGER
      },
      bus_id: {
        type: Sequelize.INTEGER
      },
      jadwal: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_books');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      }
    },{timestamps: false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
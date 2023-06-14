'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productInCars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "car_id",
        references: {
              model: "cars",
              key: 'id'
            }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "product_id",
        references: {
              model: "products",
              key: 'id'
            }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "status_id"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productInCars');
  }
};
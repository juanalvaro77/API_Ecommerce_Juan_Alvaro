'use strict';
/** @type {import('sequelize-cli').Migration} */
const {DataTypes} = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING
        },
        rolId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            field: "role_Id"
        }
      
    }, {
        timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
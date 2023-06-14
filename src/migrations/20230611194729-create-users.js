'use strict';
/** @type {import('sequelize-cli').Migration} */
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
            type: Sequelize.STRING(30),
            allowNull: false,
            unique: true,
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        avatar: {
            type: Sequelize.STRING
        },
        rolId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1,
            field: "role_id",
            references: {
              model: "roles",
              key: 'id'
            }
            
        }
      
    }, {
        timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
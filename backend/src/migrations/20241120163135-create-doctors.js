'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Specialties',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      price_service: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Doctors');
  },
};

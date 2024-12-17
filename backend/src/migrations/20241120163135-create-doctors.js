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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
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
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price_service: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      degree_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Degrees',
          key: 'id',
        },

      },
      academic_rank_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'AcademicRanks',
          key: 'id',
        },
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

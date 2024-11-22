'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor_Schedule.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Doctor_Schedule.belongsTo(models.Schedule, {
        foreignKey: 'schedule_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Doctor_Schedule.init({
    doctor_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor_Schedule',
    tableName: 'Doctor_Schedule'
  });
  return Doctor_Schedule;
};
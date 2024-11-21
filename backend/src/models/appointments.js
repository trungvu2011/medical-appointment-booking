'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointments.init({
    patient_id: DataTypes.STRING,
    doctor_id: DataTypes.STRING,
    schedule_id: DataTypes.STRING,
    status: DataTypes.INTEGER,
    symptom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointments',
  });
  return Appointments;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User, { foreignKey: 'patient_id' });
      Appointment.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  Appointment.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    price: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    symptom: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
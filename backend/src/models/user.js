'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Appointment, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female'),
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    citizen_id: DataTypes.STRING,
    address: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    healthInsurance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
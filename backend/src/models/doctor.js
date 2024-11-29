'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsTo(models.Specialty, { foreignKey: 'specialty_id' });
      Doctor.belongsToMany(models.Schedule, {
        through: models.Doctor_Schedule,
        foreignKey: 'doctor_id',
      });
    }
  }
  Doctor.init({
    name: DataTypes.STRING,
    specialty_id: DataTypes.INTEGER,
    price_service: DataTypes.INTEGER,
    level: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};
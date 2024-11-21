'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule_table.init({
    doctor_id: DataTypes.STRING,
    schedule_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedule_table',
  });
  return Schedule_table;
};
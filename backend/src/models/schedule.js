'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsToMany(models.Doctor, {
        through: models.Doctor_Schedule,
        foreignKey: 'schedule_id',
      });
    }
  }
  Schedule.init({
    work_day: DataTypes.STRING,
    start_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};
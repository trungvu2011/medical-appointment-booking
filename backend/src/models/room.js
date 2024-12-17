'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Room.init({
    name: DataTypes.STRING,
    base: DataTypes.STRING,
    doctor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
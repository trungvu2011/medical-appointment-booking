'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctors.belongsTo(models.specialties, {
        FOREIGNKEYS: 'specialty_id',
        as: 'fk_specialty',
      });
    }
  }
  Doctors.init({
    specialty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctors',
  });
  return Doctors;
};
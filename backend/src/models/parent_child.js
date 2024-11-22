'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent_Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Parent_Child.belongsTo(models.User, { foreignKey: 'parent_id' });
      Parent_Child.belongsTo(models.User, { foreignKey: 'child_id' });
    }
  }
  Parent_Child.init({
    parent_id: DataTypes.INTEGER,
    child_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Parent_Child',
  });
  return Parent_Child;
};
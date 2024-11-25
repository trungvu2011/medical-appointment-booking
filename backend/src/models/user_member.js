'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Member.belongsTo(models.User, { foreignKey: 'user_id' });
      User_Member.belongsTo(models.User, { foreignKey: 'member_id' });
    }
  }
  User_Member.init({
    user_id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Member',
  });
  return User_Member;
};
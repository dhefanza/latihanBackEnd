'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_cars.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    deletedBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_cars',
  });
  return tbl_cars;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cars.hasOne(models.users, {foreignKey: "userId"})
      cars.hasMany(models.productsInCars, {foreignKey: "carId"})
    }
  }
  cars.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cars',
  });
  return cars;
};
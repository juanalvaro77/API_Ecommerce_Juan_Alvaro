'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.productInCar, {foreignKey: "productId"})
      products.belongsTo(models.productInOrder, {foreignKey: "productId"})
      products.hasMany(models.users, {foreignKey: "userId"})
    }
  }
  products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    availableQty: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    productImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
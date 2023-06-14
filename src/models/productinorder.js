'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productInOrder.belongsTo(models.orders, {foreignKey: "orderId"})
      productInOrder.belongsTo(models.products, {foreignKey: "productId"})
    }
  }
  ProductInOrder.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductInOrder',
  });
  return ProductInOrder;
};
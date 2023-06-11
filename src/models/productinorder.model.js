const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const ProductsInOrder = db.define("productsInOrder", {
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id"
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "producto_id"
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    timestamps: false
});

module.exports =ProductsInOrder;
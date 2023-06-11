const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Products = db.define("products", {
    product: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    availableQty: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "status_id"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    productImage: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports =Products;
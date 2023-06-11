const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const ProductsInCar = db.define("productsincar", {
    product: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
    allowNull: false
},
    statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "status_id"
    },
    carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "car_id"
    },
    Price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    timestamps: false
});

module.exports =ProductsInCar;
const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Orders = db.define("orders", {
    statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "status_id"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_Id"
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    timestamps: false
});

module.exports =Orders;
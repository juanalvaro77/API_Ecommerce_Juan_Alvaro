const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Status = db.define("status", {
    status: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: false
});

module.exports = Status;
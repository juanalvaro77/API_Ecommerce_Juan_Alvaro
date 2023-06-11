const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Roles = db.define("roles", {
    status: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: false
});

module.exports = Roles;
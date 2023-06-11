const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Users = db.define("users", {
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING
    },
    rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        field: "role_Id"
    }
  
}, {
    timestamps: false
});

module.exports = Users;
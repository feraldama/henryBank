const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        docType: {
            type: DataTypes.STRING,
            
        },
        docNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        birthday: {
            type: DataTypes.INTEGER,
            validate: {
                min: 16,
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}
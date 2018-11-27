/**
 * Created by Zver on 02.11.2018.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('clients', {
        mail: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        information: {
            type: DataTypes.JSON,
            allowNull: true,
        }
    })
}
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('usluga', {
        alias: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}
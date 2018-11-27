module.exports = function(sequelize, DataTypes) {
    return sequelize.define('team', {
        alias: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job: {
            type: DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: DataTypes.JSON,
            allowNull: true
        },
        head: {
            type: DataTypes.JSON,
            allowNull: true
        }
    })
}
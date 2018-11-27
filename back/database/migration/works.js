module.exports = function(sequelize, DataTypes) {
    return sequelize.define('works', {
        alias: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        },
        background: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        theme: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        shortText: {
            type: DataTypes.TEXT,
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
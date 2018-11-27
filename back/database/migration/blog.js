module.exports = function(sequelize, DataTypes) {
    return sequelize.define('articles', {
        alias: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false,
        },
        image: {
            type: DataTypes.JSON,
            allowNull: false,
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
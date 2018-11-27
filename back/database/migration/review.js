module.exports = function(sequelize, DataTypes) {
    return sequelize.define('reviews', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        socialId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        socialType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        video: {
            type: DataTypes.STRING,
            allowNull: true
        },
        document: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('works_gallery', {
        image: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.JSON
        }
    })
}
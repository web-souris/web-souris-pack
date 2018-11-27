const Usluga = require('../models/Usluga')
module.exports = {
    //Найти услугу
    getUslugaByAlias: function (alias) {
        return Usluga.findOne({
            where: {
                alias: alias
            }
        })
    }
}
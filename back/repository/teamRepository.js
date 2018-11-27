const Team = require('../models/Team');
const Work = require('../models/Work').Work;
module.exports = {
    getAll() {
        return Team.findAndCount({
            attributes: ['id', 'alias', 'image', 'name', 'job']
        })
    },
    //Получение одного пользователя
    getByAlias(alias) {
        return Team.findOne({
            where: {
                alias: alias
            },
            include: [
                {
                    model: Work,
                    attributes: ['id', 'alias', 'background', 'theme', 'shortText', 'image', 'updatedAt', 'createdAt'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
    },

}
const Blog = require('../models/Blog');
const sequelize = require('sequelize');
const Op = sequelize.Op;
module.exports = {
    getLimit(limit = 3, page = 0) {
        return Blog.findAndCountAll({
            attributes: ['id', 'alias', 'image', 'title', 'shortText', 'updatedAt'],
            offset: page,
            limit: limit,
            order: [
                ['updatedAt', 'DESC']
            ],

        })
    },
    getByAlias(alias) {
        return Blog.findOne({
            where: {
                alias: alias
            },
            attributes: {
                exclude: ['shortText']
            }

        })
    },
    getRandom(exept, limit) {
        return Blog.findAll({
            where: {
                id: {
                    [Op.ne] : exept
                }
            },
            attributes: ['id', 'alias', 'image', 'title', 'shortText', 'updatedAt'],
            limit: limit,
            order: [
                [sequelize.literal('RAND()')]
            ]
        })
    }
}
const Work = require('../models/Work').Work;
const WorkGallery = require('../models/Work').WorkGallery;
const Usluga = require('../models/Usluga');
const Team = require('../models/Team');
const Review = require('../models/Review');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const teamRepository = require('./teamRepository');
const uslugaRepository = require('./uslugaRepository');
module.exports = {
    //Получение для главной
    getIndex() {
        return Work.findAll(
            {
                attributes: ['id', 'alias', 'background', 'theme', 'shortText', 'image', 'updatedAt', 'createdAt', 'title'],
                order: [
                    ['updatedAt', 'DESC']
                ],
                limit: 4,
            }
        )
    },
    //Получение для портфолио
    getAll(page) {
        const limit = 6
        return Work.findAndCount({
            limit: limit,
            offset: page,
            attributes: ['id', 'alias', 'background', 'theme', 'shortText', 'image', 'updatedAt', 'createdAt', 'title'],
            order: [
                ['updatedAt', 'DESC']
            ],
        })
    },
    //Получение по типу
    getByType(type, page) {
        const limit = 6
        return Work.findAndCount({
            limit: limit,
            offset: page,
            attributes: ['id', 'alias', 'background', 'theme', 'shortText', 'image', 'updatedAt', 'createdAt', 'title'],
            order: [
                ['updatedAt', 'DESC']
            ],
            include: [
                {
                    model: Usluga,
                    where: {
                        alias: type
                    },
                    through: {
                        attributes: []
                    }
                }
            ]
        })
    },
    //Получение по ссылке
    getByAlias(alias) {
        return Work.findOne({
            where: {
                alias: alias
            },
            include: [
                {
                    model: Usluga,
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Team,
                    attributes: ['name', 'alias', 'image'],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: WorkGallery,
                    as: 'gallery'
                },
                {
                    model: Review,
                    as: 'review'
                }

            ]
        })
    },
    //Получение рандомных работ
    getRandom(exept, limit) {
        return Work.findAll({
            where: {
                id: {
                    [Op.ne] : exept
                }
            },
            attributes: ['id', 'alias', 'background', 'theme', 'shortText', 'image', 'updatedAt', 'createdAt'],
            limit: limit,
            order: [
                [sequelize.literal('RAND()')]
            ]
        })
    },
    //Добавление работы
    addWork(newWork) {
        return  Work.create(newWork)
    },
    //Добавить сотрудника для работы
    async addTeamByWork(alias, work) {
        const team = await teamRepository.getByAlias(alias)
        return team.addWork(work)
    },
    //Добавить услугу для работы
    async addUslugaByWork(alias, work) {
        const usluga = await uslugaRepository.getUslugaByAlias(alias)
        return usluga.addWork(work)
    }
}
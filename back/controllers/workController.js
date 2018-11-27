/**
 * Created by Zver on 03.11.2018.
 */
const workRepository = require('../repository/workRepository');
module.exports = {
    getIndex: async function (req, res, next) {
        const works = await workRepository.getIndex()
        if(works) {
            res.json(works)
        }
        else {
            res.sendStatus(404)
        }
    },
    getAll: async function(req,res,next) {
        const type = req.query.type || null
        const page = parseInt(req.query.limit || 0)
        const works = type == null ? await workRepository.getAll(page) : await  workRepository.getByType(type, page)
        if(works.rows.length) {
            res.json(works)
        }
        else {
            res.status(404).json('Страница не найдена')
        }
    },
    getByAlias: async function(req, res,next) {
        const alias = req.params.alias
        const work = await workRepository.getByAlias(alias)
        console.log(work)
        if(work) {
            console.log(work)
            const random = await workRepository.getRandom(work.id, 3)
            res.json({
                work: work,
                random: random
            })
        }
        else {
            res.status(404).json('Страница не найдена')
        }
    }
}
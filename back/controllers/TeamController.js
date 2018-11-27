const Team = require('../models/Team');
const teamRepsitory = require('../repository/teamRepository');
module.exports = {
    async getAll(req,res) {
        const team = await teamRepsitory.getAll();
        res.json(team)
    },
    async getOne(req,res) {
        const alias = req.params.alias
        const team = await teamRepsitory.getByAlias(alias)
        if(team) {
            res.json(team)
        }
        else {
            res.status(404).json('Страница не найдена')
        }
    }
}
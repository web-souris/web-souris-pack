const blogRepository = require('../repository/blogRepository');
module.exports =  {
    async getIndex(req, res, next) {
        const limit = 3;
        const articles = await blogRepository.getLimit(limit);
        if(articles.rows) {
            res.json(articles.rows);
        }
        else {
            res.sendStatus(404)
        }
    },
    async getAll(req, res, next) {
        const page = parseInt(req.query.limit) || 0;
        console.log(page)
        const limit = 6;
        const articles = await blogRepository.getLimit(limit, page)
        if(articles.rows.length) {
            res.json(articles)
        }
        else {
            res.sendStatus(404)
        }
    },
    async getByAlias(req, res, next) {
        const alias = req.params.alias
        const article = await blogRepository.getByAlias(alias)
        if(article) {
            const random = await blogRepository.getRandom(article.id, 3)
            res.json({
                article: article,
                random: random
            })
        }
        else {
            res.sendStatus(404)
        }
    }
}
/**
 * Created by Zver on 27.10.2018.
 */

const app = require('express');
const router = app.Router();
const clients = require('./clients');
const works = require('./works');
const blog = require('./blog');
const team = require('./team');
router.get('/', function (req, res, next) {
    console.log(req);
    res.json({
        1: 1
    })
})

router.use('/clients', clients);
router.use('/works', works);
router.use('/blog', blog);
router.use('/team', team);
module.exports = router;
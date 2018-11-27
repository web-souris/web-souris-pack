/**
 * Created by Zver on 03.11.2018.
 */
const app = require('express');
const router = app.Router();
const worksController = require('../controllers/workController');

router.get('/', worksController.getIndex);
router.get('/all', worksController.getAll);
router.get('/:alias', worksController.getByAlias)
module.exports = router
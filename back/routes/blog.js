/**
 * Created by Zver on 03.11.2018.
 */
const app = require('express');
const router = app.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getIndex);
router.get('/all', blogController.getAll);
router.get('/:alias', blogController.getByAlias);
module.exports = router
/**
 * Created by Zver on 03.11.2018.
 */
const app = require('express');
const router = app.Router();
const teamController = require('../controllers/TeamController');

router.get('/', teamController.getAll);
router.get('/:alias', teamController.getOne);
module.exports = router
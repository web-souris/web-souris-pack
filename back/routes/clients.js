/**
 * Created by Zver on 03.11.2018.
 */
const app = require('express');
const router = app.Router();
const clientController = require('../controllers/clientController');

router.post('/', clientController.addClient);

module.exports = router
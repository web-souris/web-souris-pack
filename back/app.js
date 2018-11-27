/**
 * Created by Zver on 27.10.2018.
 */
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')('dev');
const app = express();
const {database} = require('./database/migration/index');


const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan);
app.use(cors());
app.use(express.static('./uploads'));
app.enable('trust proxy');

app.use('/', routes);
app.use(function(req, res, next) {
    next({
        status: 404,
        message: 'Страница не найдена'
    });
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    req.error = err.message
    const message = err.message ? err.message : err.status == 404 ? 'Страница не найдена' : '123'
    res.json(message);
})

app.listen(port, function () {
    database();
    console.log('server running on port ' + port)
});
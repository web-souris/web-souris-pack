/**
 * Created by Zver on 27.10.2018.
 */
const database = require('./database');
const mail = require('./mail');
const cache = require('./cache');
module.exports = {
    database: database,
    mail: mail,
    cache: cache
}
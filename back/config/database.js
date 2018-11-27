/**
 * Created by Zver on 27.10.2018.
 */
module.exports = {
    database: process.env.NODE_ENV == 'production' ? 'webssouris_web' : 'web-souris',
    user: process.env.NODE_ENV == 'production' ? 'webssouris_web' : 'root',
    password: process.env.NODE_ENV == 'production' ? '%&PiCi0K' : '',
    host: 'localhost'
}
const moment = require('moment')

module.exports = {
    getDatabaseFormat: function () {
        const now = moment().format('YYYY-MM-DD HH:mm:ss')
        return now
    }
}
/**
 * Created by Zver on 03.11.2018.
 */
const geo = require('geoip-lite');
module.exports = {
    getLocation: function (ip) {
        return geo.lookup(ip);
    }
}
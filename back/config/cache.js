const cacheManager = require('cache-manager');
const fsStore = require('cache-manager-fs');
const options = {
    store: fsStore,
    options: {
        ttl: 60*60,
        maxsize: 1000*1000*1000,
        path:'system/cache',
        preventfill: true
    }
}
module.exports = cacheManager.caching(options);
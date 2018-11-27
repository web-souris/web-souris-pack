/**
 * Created by Zver on 02.11.2018.
 */
const Client = require('../models/Client');
const geoIp = require('../utils/geoIp');
const dateUtil = require('../utils/moment')
module.exports = {
    //Добавление клиента
    addClient:  function(req) {
        const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
        const location =  geoIp.getLocation(ip)
        console.log(location);
        return Client.findOrCreate(
            {
                where: {
                    mail: req.body.mail
                },
                defaults: {
                    mail: req.body.mail,
                    phone: req.body.phone,
                    name: req.body.name,
                    information: {
                        location:  location,
                        amount: 0,
                        orders: [],
                        request: []
                    }
                }
            },
        )
    },
    //Добавление запроса
    addRequest: function(client, req) {
        const info = {
            text: req.body.text,
            date: dateUtil.getDatabaseFormat()
        }
        var request = client.information.request
        request.push(info)
        console.log(request)
        client.information.request = request
        client.changed('json', true)
        return client.update(
            {
                information: client.information
            }
        )
    }
}
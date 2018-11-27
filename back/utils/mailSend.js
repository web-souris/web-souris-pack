/**
 * Created by Zver on 03.11.2018.
 */
const config = require('../config/mail');
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: true,
    auth: {
        user: config.auth.noReply.user,
        pass: config.auth.noReply.pass
    }
})
module.exports = {
    newClient: function (client, callback) {
        const mailOptions = {
            from: '"Web-Souris" <no-reply@web-souris.ru>',
            to: 'info@web-souris.ru',
            subject: 'Новая заявка с сайта',
            text: 'Пришла новая заявка с сайта',
            html: '<h1>Новая заявка с сайта</h1>' +
            '<p>Имя: '+client.client.name+'</p>' +
            '<p>Телефон: '+client.client.phone+'</p>' +
            '<p>E-mail: '+client.client.mail+'</p>' +
            '<p>Текст: ' + client.text + '</p>'
        }
        transport.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                transport.sendMail(mailOptions, (err, info) => {
                    if(err) {
                        return callback(err, null)
                    }
                    else {
                        return callback(null, info)
                    }
                })
            }
        })

    }
}
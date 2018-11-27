/**
 * Created by Zver on 03.11.2018.
 */
const clientRepository = require('../repository/clientRepository');
const sendMail = require('../utils/mailSend');
module.exports = {
    addClient: async function (req, res, next) {
        const client = await clientRepository.addClient(req)
        if(client) {
            if(req.body.text) {
                var user = await clientRepository.addRequest(client[0], req)
            }
            else {
                var user = client[0]
            }
            sendMail.newClient({client: user, text: req.body.text}, function (err,  info) {
                if(err) {
                    res.status(500)
                    res.json(err)
                }
                else {
                    res.json('Ваша <b>заявка принята</b> и <b>обрабатывается</b>. <b>Ожидайте звонка</b>, мы свяжемся с Вами <b>в ближайшее время</b>!')
                }
            })
        }
        else {
            res.sendStatus(404)
        }
    }
}
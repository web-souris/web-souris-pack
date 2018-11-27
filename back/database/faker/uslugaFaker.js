module.exports = (database) => {
    database.findAndCountAll({}).then(function (items) {
        if(!items.count) {
            const items = [
                {
                    alias: 'sayti',
                    name: 'Сайты'
                },
                {
                    alias: 'firmeniy-style',
                    name: 'Фирменный стиль'
                },
                {
                    alias: 'soc-seti',
                    name: 'Социальные сети'
                },
                {
                    alias: 'prodvishenie-i-reklama',
                    name: 'Продвижение и реклама'
                },
                {
                    alias: 'kopiright',
                    name: 'Копирайт'
                },
                {
                    alias: 'other',
                    name: 'Другое'
                }
            ]
            for(var i = 0; i <= items.length - 1; i++) {
                database.create({
                    alias: items[i].alias,
                    name: items[i].name
                }).then(function () {
                })
            }
        }
    })
}
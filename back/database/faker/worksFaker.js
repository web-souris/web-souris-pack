const faker = require('faker');
faker.locale = 'ru'

module.exports = (database) => {
    database.findAndCountAll().then(function (items) {
        if(!items.count) {
            for(var i = 1; i<=5; i++) {
                database.create({
                    alias: faker.lorem.slug(4),
                    title: faker.name.title(),
                    background: 'red',
                    theme: faker.lorem.word(10),
                    shortText: faker.lorem.sentences(2),
                    image: faker.image.imageUrl()
                    }).then(function (item) {
                        item.addUsluga([1,2])
                    console.log('Работа успешно добавлена')
                })
            }
        }
    })
}
const faker = require('faker');
faker.locale = 'ru'

module.exports = (database) => {
    database.findAndCountAll({}).then(function (items) {
        if(!items.count) {
            for(var i = 1; i<=10; i++) {
                database.create({
                    alias: faker.lorem.slug(4),
                    title: faker.name.title(),
                    shortText: faker.lorem.sentences(15),
                    image: {
                        index: faker.image.imageUrl(300, 300),
                        blog: faker.image.imageUrl(600, 300),
                        item: faker.image.imageUrl(1170, 700)
                    },
                    head: {
                        title: faker.name.title(),
                        description: faker.lorem.sentences(2),
                        image: faker.lorem.slug(2)
                    }
                }).then(function (item) {
                })
            }
        }
    })
}
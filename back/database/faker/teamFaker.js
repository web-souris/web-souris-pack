const team = [
    {
        alias: 'stepa-kuzovov',
        name: 'Кузовов Степан',
        image: '/img/team/stepa-kuzovov.jpg',
        job: 'Full-stack разработчик'
    }
]
module.exports = (database) => {
    database.findAndCountAll().then((items) => {
        if (!items.count) {
            team.map(function (item) {
                database.create(item)
            })
        }
    })
}
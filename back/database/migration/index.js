/**
 * Created by Zver on 02.11.2018.
 */
const config = require('../../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    dialectOptions: {
        dateStrings: true,
        timezone: '+3:00',
    },
    logging: false,
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
    timezone: '+3:00'
})

const Client = sequelize.import('./clients');
const Work = sequelize.import('./works');
const Usluga = sequelize.import('./usluga');
const Blog = sequelize.import('./blog');
const Team = sequelize.import('./team');
const WorkUsluga = sequelize.define('works_uslugas');
const WorkTeam = sequelize.define('works_team');
const WorkGallery = sequelize.import('./workGallery');
const Review = sequelize.import('./review');
Work.belongsToMany(Usluga, { through: WorkUsluga });
Usluga.belongsToMany(Work, { through: WorkUsluga });
Team.belongsToMany(Work, { through: WorkTeam});
Work.belongsToMany(Team, {through: WorkTeam});
Work.hasMany(WorkGallery, {as: 'gallery'});
WorkGallery.belongsTo(Work);
Work.hasMany(Review, {as: 'review'});
Review.belongsTo(Work);
module.exports = {
    database: function () {
        sequelize.authenticate()
            .then(function () {
                sequelize.sync({force: process.env.NODE_ENV != 'production'})
                    .then(function () {
                        require('../faker/uslugaFaker')(Usluga)
                        require('../faker/teamFaker')(Team)
                        console.log('Database is sync')
                        if(process.env.NODE_ENV != 'production') {
                            require('../faker/blogFaker')(Blog);
                            require('../seeder/index')();
                        }
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
            .then(function (err) {
                console.log(err)
            })
    },
    Client: Client,
    Work: Work,
    Usluga: Usluga,
    Blog: Blog,
    Team: Team,
    WorkGallery: WorkGallery,
    Review: Review
}


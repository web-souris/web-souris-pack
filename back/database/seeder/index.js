const fs = require('fs');
const del = require('delete');
const worksRepository = require('../../repository/workRepository');
//const teamRepository = require('../../repository/teamRepository');
var arrFiles = []
const works = fs.readdirSync(__dirname + '/works');
const review = fs.readdirSync(__dirname + '/review');
const team = fs.readdirSync(__dirname + '/team');
const events = fs.readdirSync(__dirname + '/events');
const blog = fs.readdirSync(__dirname + '/blog');
addArray('review', review);
addArray('team', team);
addArray('events', events);
addArray('blog', blog);
addArray('works', works);
module.exports = async function() {
    for (var i = 0; i <= arrFiles.length - 1; i++ ) {
        const json = require(arrFiles[i].file);
        const item = await addItem(json, arrFiles[i].type);
        if(item && process.env.NODE_ENV == 'production') {
            const deleteItem = del.sync(arrFiles[i].file);
            if (deleteItem) {
                console.log('Файл удален')
            }
        }

    }
}
function addArray(type, files) {
    files.map(function (item) {
        arrFiles.push({
            file: __dirname + '/' + type + '/' + item,
            type: type
        })
    })
}
async function addItem(json, type) {
    switch (type) {
        case 'works': {
            var item = await worksRepository.addWork(json)
            if(json.team.length) {
                for(var z = 0; z <= json.team.length - 1; z++) {
                    await worksRepository.addTeamByWork(json.team[z], item)
                }
            }
            if(json.uslugi.length) {
                for(var z = 0; z <= json.uslugi.length - 1; z++) {
                    await worksRepository.addUslugaByWork(json.uslugi[z], item)
                }
            }
            if(json.gallery.length) {
                for (var z = 0; z <= json.gallery.length - 1; z++) {
                    await item.createGallery(json.gallery[z])
                }
            }
            if(json.review.length) {
                for(var z = 0; z <= json.review.length - 1; z++) {
                    await item.createReview(json.review[z])
                }
            }
            break
        }
        default:

    }
    return true
}


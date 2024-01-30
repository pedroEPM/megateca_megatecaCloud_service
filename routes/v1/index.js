const advSearch = require('./advSearch');
const notes = require('../v1/notes');

module.exports = (app) => {
    advSearch(app)
    notes(app)
}
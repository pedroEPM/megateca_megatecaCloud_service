const { updatedNoteById } = require('../../controllers/notes');

module.exports = (app) => {
    app.put('/v1/notes/:id', updatedNoteById)
}
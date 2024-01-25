const { getElements } = require('../../controllers/advSearch');
module.exports = (app) => {
    app.post('/v1/advSearch', getElements)
}
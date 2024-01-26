const { getElements, setElementsAnotherSchema } = require('../../controllers/advSearch');
module.exports = (app) => {
    app.post('/v1/advSearch', getElements)
    app.post('/v1/setAnotherElements', setElementsAnotherSchema)
}
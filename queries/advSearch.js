const { closeDB, openDB } = require('../utils/mongoConntection');
const schemaType = (type) => {
    switch (type) {
        case 'Notas':
            return 'allnotes';
        case 'Imagenes':
            return '';
        case 'PDFs':
            return '';
    }
}

class AdvSearch {
    async getAllInfo(type, settings, settingsForCounter, firstTimeSearch) {
        try {

            console.log(settingsForCounter)
            const db = await openDB();
            const schemaName = schemaType(type);
            let getAll = [];
            if(firstTimeSearch !== 'true') {
                getAll = await db.collection(schemaName).aggregate(settings).toArray();
            } else {
                getAll = await db.collection(schemaName).aggregate(settingsForCounter).next();
            }
            // await closeDB(); 

            return getAll;
             
        } catch (error) {
            console.log(error);
            console.log('Error by getAllInfo');
        }
    }
}

module.exports = new AdvSearch();
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
    async getAllInfo(type, settings) {
        try {
            const db = await openDB();
            const schemaName = schemaType(type);
            const getNotes = await db.collection(schemaName).aggregate(settings).toArray();
            await closeDB(); 

            return getNotes;
             
        } catch (error) {
            console.log(error);
            console.log('Error by getAllInfo');
        }
    }
}

module.exports = new AdvSearch();
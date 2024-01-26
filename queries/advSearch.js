const oldNotes = require('../models/oldNotes2');
const allNotes = require('../models/allNotes');
const notes = require('../models/notes');

const { setNote } = require('../utils/returnSimpleBody')
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

            const db = await openDB();
            const schemaName = schemaType(type);
            let getAll = [];
            if (firstTimeSearch !== 'true') {
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

    async sendInfoInAnotherSchema() {

        try {

            for(let i = 2024; i >= 1925; i++) {
                const cBody = {
                    date: {
                        $gte: new Date(`${i}-01-01`),
                        $lt: new Date(`${i + 1}-01-01`)
                    }
                }
                const allOldNotes = await oldNotes.find(cBody);
                const cAllNotes = await allNotes.find(cBody);

                const allData = [];

                for(const LitleNote of allOldNotes) allData.push(LitleNote);
                for(const LitleNote of cAllNotes) allData.push(LitleNote);
                
                for(const newAllLitleData of allData) {
                    const newNote = new notes(setNote(newAllLitleData));
                    await newNote.save();
                }
            }

           
            return 'ok';
            
        } catch (error) {
            console.log(error);
            console.log('Error by sendInfoInAnotherSchema');
        }

    }
}

module.exports = new AdvSearch();
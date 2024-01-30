const oldNotes = require('../models/oldNotes2');
const allNotes = require('../models/allNotes');
const notes = require('../models/notes');

const oldPdfs = require('../models/pfds222');
const allPdfs = require('../models/pdfGalileo');
const pdfs = require('../models/pdfs');

const { setNote, setPDF } = require('../utils/returnSimpleBody')
const { closeDB, openDB } = require('../utils/mongoConntection');
const schemaType = (type) => {
    switch (type) {
        case 'Notas':
            return notes;
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
                getAll = await schemaName.aggregate(settings);
            } else {
                getAll = await schemaName.aggregate(settingsForCounter).next();
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

            for(let i = 2020; i >= 1925; i--) {
                console.log(`--- ${i} ---`)
                const cBody = {
                    datePublication: {
                    // date: {
                        $gte: new Date(`${i}-01-01`),
                        $lt: new Date(`${i + 1}-01-01`)
                    }
                }
                const allOldNotes = await oldPdfs.find(cBody);
                const cAllNotes = await allPdfs.find(cBody);

                const allData = [];

                for(const LitleNote of allOldNotes) allData.push(LitleNote);
                for(const LitleNote of cAllNotes) allData.push(LitleNote);
                
                if(allData.length > 0) console.log(`-- ${allData.length} length --`)
                for(const newAllLitleData of allData) {
                    const newNote = new pdfs(setPDF(newAllLitleData));
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
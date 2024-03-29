const { setTypeSearchFT, indexFortype, removeAccents } = require('./atlasSearchObjFT');
const { ObjectId } = require('mongodb');

const setCustomParams = (body) => {
    const pdfBody = {}, imageBody = {}, noteBody = {};
    if( body.ignoredwords || body.keywords || body.keysentence ) {
        pdfBody.cSearch = {
            index: indexFortype(body.search),
            compound: {}
        };
        imageBody.cSearch = {
            index: indexFortype(body.search),
            compound: {}
        };
        noteBody.cSearch = {
            index: indexFortype(body.search),
            compound: {}
        };
    }

    if( !body.date || body.dateRange || body.publicationRef || body.noteBookRef ) {
        pdfBody.match = {};
        imageBody.match = {};
        noteBody.match = {};
    }

    if(body.search === 'PDFs' && (body.ignoredwords || body.keywords || body.keysentence)) noteBody.match = { idMongoPDF: { $ne: null } }

    if (body.date && body.dateRange && !body.key) {
        let firstDate = new Date(`${body.dateRange}T00:00:00Z`);
        let secondDate = new Date(`${body.date}T23:59:59Z`);
        firstDate = new Date(firstDate).toISOString();
        secondDate = new Date(secondDate).toISOString();
    
        pdfBody.match.datePublication = imageBody.match.publicationDate = noteBody.match.date = { $gte: new Date(firstDate), $lte: new Date(secondDate) }; 
        // pdfBody.match.datePublication = imageBody.match.publicationDate = noteBody.match.date = { $gte: new Date(body.dateRange), $lte: new Date(body.date) }; 
        console.log(pdfBody.match.datePublication)
    }

    if (body.publicationRef && !body.key) {
        pdfBody.match.publication = imageBody.match.publicationRef =  noteBody.match.publicationRef = new ObjectId(body.publicationRef);
    }

    if (body.noteBookRef && !body.key) {
        pdfBody.match.notebook = imageBody.match.noteBookRef = noteBody.match.noteBookRef = new ObjectId(body.noteBookRef);
    }

    if (body.keysentence && !body.key) {
        pdfBody.cSearch.compound.must = imageBody.cSearch.compound.must = noteBody.cSearch.compound.must = [{
            phrase: setTypeSearchFT(body.search, removeAccents(body.keysentence).replace(/\s+/g, ' ').toLowerCase().trim())
        }];
    }

    if (body.keywords && !body.key) {
        const littleData = [];
        let cIndex = 0;
        body.keywords.trim().split(' ').sort(function (a, b) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }).forEach(word => {
            if (word.trim() !== '') {
                littleData.push({
                    text: setTypeSearchFT(body.search, removeAccents(word).toLowerCase().trim())
                })
                cIndex++;
            }
        });
        pdfBody.cSearch.compound.should = imageBody.cSearch.compound.should = noteBody.cSearch.compound.should = littleData;
        pdfBody.cSearch.compound.minimumShouldMatch = imageBody.cSearch.compound.minimumShouldMatch = noteBody.cSearch.compound.minimumShouldMatch = cIndex;
        
    }

    if (body.ignoredwords && !body.key) {
        const littleData = [];
        let cIndex = 0;
        body.ignoredwords.trim().split(' ').sort(function (a, b) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }).forEach(word => {
            if (word.trim() !== '') {
                littleData.push({
                    text: setTypeSearchFT(body.search, removeAccents(word).toLowerCase().trim())
                })
                cIndex++;
            }
        });
        pdfBody.cSearch.compound.mustNot = imageBody.cSearch.compound.mustNot = noteBody.cSearch.compound.mustNot = littleData;
        
    }

    if(body.search === 'PDFs' && (body.ignoredwords || body.keywords || body.keysentence)) return noteBody;
    
    switch(body.search) {
        case 'Notas':
            return noteBody;
        case 'Imagenes':
            return imageBody;
        case 'PDFs':
            return pdfBody;
    }
}


module.exports = {
    setCustomParams
}
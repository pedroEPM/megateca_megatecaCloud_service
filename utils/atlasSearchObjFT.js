const { bodyFortype } = require('./setParams');

const setTypeSearchFT = (type, search) => {

    const bodyFortype = (type) => {
        
        switch (type) {
            case 'Notas':
                return [
                    'title',
                    'subTitle',
                    'originalAuthor',
                    'modifierAuthor',
                    'content'
                ]
            case 'Imagenes':
                return [
                    'description',
                    'place',
                    'material',
                    'observations',
                ]
            case 'PDFs':
                return [
                    'title',
                    'subTitle',
                    'originalAuthor',
                    'modifierAuthor',
                    'content'
                ]
        }
    }

    const whereSearching = bodyFortype(type);
    return {
        query: search,
        path: whereSearching
    }
}

const indexFortype = (type) => {
    switch (type) {
        case 'Notas':
            return 'notesFT';
        case 'Imagenes':
            return 'imagesFT';
        case 'PDFs':
            return 'notesFT';
    }
}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

module.exports = {
    setTypeSearchFT,
    indexFortype,
    removeAccents
}
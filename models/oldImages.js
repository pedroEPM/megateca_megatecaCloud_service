const { Schema, model } = require('mongoose')
const Imagesc = new Schema({


    idMegamedia: { type: String, required: false, unique: false },
    idOriginal: { type: String, required: false, unique: false },

    customId: {type: Number},
    sectionRef: { type: Schema.Types.ObjectId, ref: 'Section', required: false, unique: false },
    section: { type: String, required: false, unique: false },
    editionRef: { type: Schema.Types.ObjectId, ref: 'Editions', required: false, unique: false }, //referencia a seccion
    idNoticia: { type: String, required: false, unique: false },
    photographer: { type: Schema.Types.ObjectId, ref: 'Photographer', required: false, unique: false },
    idAgency: { type: Schema.Types.ObjectId, ref: 'Agencies', required: false, unique: false },
    clasificationRef: { type: Schema.Types.ObjectId, ref: 'Clasifications', required: false, unique: false },
    publicationRef: { type: Schema.Types.ObjectId, ref: 'Publications', required: false /*[true, 'Se necesita']*/, unique: false },//, required: [true, 'se requiere unapublicacion a la cual pertenecer'] 
    noteBookRef: { type: Schema.Types.ObjectId, ref: 'NoteBooks', required: false /*[true, 'Se necesita']*/, unique: false }, //referencia a cuaderno,
    description: { type: String, required: false, unique: false },
    place: { type: String, required: false, unique: false },
    material: { type: String, required: false, unique: false },
    publicationDate: { type: Date, required: false, unique: false }, //date publication
    dateStringInfo: { type: String, required: false, unique: false },
    date: { type: Date, default: new Date(), required: false, unique: false }, //date creation, when the pic was taken
    origenDate: { type: Date, required: false, unique: false }, //date origen
    isPublished: { type: Boolean, required: false, unique: false },
    isYearBook: { type: Boolean, required: false, unique: false },
    isSelleable: { type: Boolean, required: false, unique: false },
    observations: { type: String, required: false, unique: false },
    page: { type: Number, required: false, unique: false },
    status: { type: Boolean, required: false, unique: false },
    externalFotographer: { type: String, required: false, unique: false },
    imageSrc: { type: String, required: false, unique: false },
    folder: { type: String, required: false, unique: false },

    olddescription: { type: String, required: false, unique: false },
    ImageTitle: { type: String, required: false, unique: false },//, required: [true, 'se requiere un titulo de la Imagen']
    typeExtencion: { type: String, required: false, unique: false },
    caption: { type: String, required: false, unique: false }, // son las observaciones si es que en algun momento las piden
    carpetaOrigen: { type: String, required: false, unique: false },
    NoteRef: { type: String, required: false, unique: false },
    PdfRef: { type: String, required: false, unique: false },
    fromMensajero: { type: Boolean, required: false, unique: false },// datos realmente innecesarios, son solo para saber que si la imagen viene de galileo y activar eventos en front-end
    fromMensajeroUpdate: { type: Boolean, required: false, unique: false },// datos realmente innecesarios, son solo para saber que si la imagen viene de galileo y activar eventos en front-end
    qantityDownloads: { type: String, required: false, unique: false },
    graphicRef: { type: Schema.Types.ObjectId, ref: 'Graphics', required: false, unique: false },
    itWasExported: { type: Boolean, required: false, unique: false },
    canSell: { type: Boolean, required: false, unique: false },
    hide: { type: Boolean, required: false, unique: false },
    oldcontent: { type: String, required: false, unique: false },
    pixels: { type: String, required: false, unique: false },
    attributedTitle: { type: String, required: false, unique: false },
    indexPosition: { type: Number, trim: false, unique: false, index: false },

    isSorted: { type: Boolean, default: false },
    isUpdated: { type: Date },
    isEditedByGalileo: { type: Boolean },
    editDate: { type: Date },
    odPdfName: {type: String},
    customIdReverse: { type: Number},
    customId: { type: Number}, 

    isNewId: { type: String },


    // olddescription: { type: String },
    // description: { type: String },
    // idAgency: { type: String },
    // idMegamedia: { type: Number },
    // dateStringInfo:  { type: String },
    // imageSrc: { type: String }, 
    // date: { type: Date, default: new Date() }, //date creation, when the pic was taken
    // publicationDate: { type: Date, }, //date publication
    // origenDate: { type: Date, }, //date origen
    // ImageTitle: { type: String },//, required: [true, 'se requiere un titulo de la Imagen']
    // publicationRef: { type: Schema.Types.ObjectId, ref: 'Publications'},//, required: [true, 'se requiere unapublicacion a la cual pertenecer'] 
    // noteBookRef: { type: Schema.Types.ObjectId, ref: 'NoteBooks' }, //referencia a cuaderno,
    // clasificationRef : { type: Schema.Types.ObjectId, ref : 'Clasifications' },
    // typeExtencion: { type: String, },
    // status: { type: Boolean, },
    // caption: { type: String, }, // son las observaciones si es que en algun momento las piden
    // page: { type: Number},
    // photographer: { type: String},
    // carpetaOrigen: { type: String},
    // NoteRef: { type: String},
    // fromMensajero: { type: Boolean},// datos realmente innecesarios, son solo para saber que si la imagen viene de galileo y activar eventos en front-end
    // fromMensajeroUpdate: { type: Boolean},// datos realmente innecesarios, son solo para saber que si la imagen viene de galileo y activar eventos en front-end
    // isPublished: { type: Boolean},
    // isYearBook: { type: Boolean},
    // section: { type: Schema.Types.ObjectId, ref: 'Section' },
    // isSelleable : { type : Boolean },
    // observations: { type: String},
    // qantityDownloads: { type: String},
    // place: { type: String},
    // graphicRef: { type: Schema.Types.ObjectId, ref: 'Graphics' },
    // itWasExported: { type: Boolean },
    // canSell: { type: Boolean },
    // hide:{ type: Boolean },
    // oldcontent : { type : String },
    // pixels : { type : String },
    // attributedTitle : { type : String},
    // externalFotographer: { type: String },

})
// module.exports = model('Imagesc2', Imagesc)

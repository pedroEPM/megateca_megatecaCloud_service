const { Schema, model } = require('mongoose')
const pdfscSchema = new Schema({
    idMegamedia: { type: String },
    publication: { type: Schema.Types.ObjectId, ref: 'Publications' },
    notebook: { type: Schema.Types.ObjectId, ref: 'NoteBooks' },
    section: { type: Schema.Types.ObjectId, ref: 'Section' },
    idNoticia: { type: String },
    idNoticeMegamedia: { type: String },
    clasificationRef: { type: Schema.Types.ObjectId, ref: 'Clasifications' },
    title: { type: String },
    descriptio: { type: String },
    page: { type: Number },
    datePublication: { type: Date, default: new Date() },
    dateCreation: { type: Date, default: new Date() },
    lastEditionDate: { type: Date },
    status: { type: Boolean },
    folder: { type: String },
    imageSrc: { type: String },
    imageSrcThumb: { type: String },
    indexPosition: { type: String },
    uniqueKey: { type: String },
    customId: {type: Number },
    dateStringInfo: { type: String },
    place: { type: String },
    observations: { type: String },
    // agency: { type: Schema.Types.ObjectId, ref: 'Agencies' },
    agency: { type: String },
    downloads: { type: Number },
    isSelleable: { type: Boolean },
    isPublished: { type: Boolean },
    isYearbook: { type: Boolean },
    catalogingInstitution: { type: String },
    periodicity: { type: String },
    language: { type: String },
    imprint: { type: String },
    director: { type: String },
    localSeries: { type: String },
    hide: { type: Boolean },
    oldcontent: { type: String },
    ImageRef: [],
    NoteRef: [],

    isSorted: { type: Boolean },
    idMegamediaString: { type: String },
    maybeExported: { type: Boolean },
    isEditedByGalileo: { type: Boolean },
    notFound: {type: Boolean},

    isNewId: { type: String },
    isCheckedForNewNotebook: { type: Boolean }

})
// module.exports = model('Pdfsc2222', pdfscSchema)

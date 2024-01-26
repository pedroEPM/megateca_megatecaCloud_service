const { Schema, model } = require('mongoose')
const notesContainer07 = new Schema({
    idMegamedia: { type: String , required: false, unique: false, },
    customId: { type: Number },
    title: { type: String, required: false, unique: false, },//, required: [true, 'se requiere un titulo'] 
    subTitle: { type: String , required: false, unique: false, },
    idMegamedia: {type: String, required: false, unique: false, },
    place: { type: String , required: false, unique: false, },
    publicationRef: { type: Schema.Types.ObjectId, ref: 'Publications' , required: false, unique: false, }, //referencia a seccion
    noteBookRef: { type: Schema.Types.ObjectId, ref: 'NoteBooks' , required: false, unique: false, }, //referencia a cuaderno
    sectionRef: { type: Schema.Types.ObjectId, ref: 'Sections' , required: false, unique: false, }, //referencia a seccion
    section: { type: String , required: false, unique: false, }, //referencia a la seccion ? 
    page: { type: Number , required: false, unique: false, },
    agency: { type: String , required: false, unique: false, },
    salable: { type: Boolean , required: false, unique: false, },
    published: { type: Boolean , required: false, unique: false, },
    anuary: { type: Boolean , required: false, unique: false, },
    status: { type: Number , required: false, unique: false, },
    originalAuthor: { type: String, required: false, unique: false, },//, required: [true, 'se requiere al autor de la nota'] 
    modifierAuthor: { type: String, required: false, unique: false, },//, required: [true, 'se requiere al autor de el ultimo cambio'] 
    date: { type: Date, required: false, unique: false, },//, required: [true, 'se requiere la fecha de creacion'] 
    dateStringInfo:  { type: String , required: false, unique: false, },
    LastModifyDate: { type: String, required: false, unique: false, },//, required: [true, 'se requiere la fecha de su modificacion'] 
    content: { type: String, required: false, unique: false, },//, required: [true, 'se requiere un contenido'] 
    isSelleable : { type : Boolean , required: false, unique: false, },
    isPublished : { type : Boolean , required: false, unique: false, },
    isYearbook : { type : Boolean , required: false, unique: false, },
    observations : { type : String , required: false, unique: false, },
    oldcontent: { type: String, required: false, unique: false, },
    oldsubTitle: { type: String, required: false, unique: false, },
    oldtitle: { type: String, required: false, unique: false, },
    hide:{ type : Boolean , required: false, unique: false, },
    indexPosition: {type : Number, trim: false, unique: false, index: false , required: false },
    relatedPDFindex: [],
    ImageRef: { type: String , required: false, unique: false, },
    PdfRef: { type: String , required: false, unique: false, },
    customId: { type: Number },
    isEditedByGalileo: { type: Boolean },
    editDate: { type: Date },    
    isNewId: { type: String },
    textIsRemoved: { type: Boolean },
    odPdfName: {type: String},
    pdfNameChecked: {type: Boolean},
    customIdReverse: { type: Number},
    idMongoPDF: { type: String }
})
module.exports = model('notes', notesContainer07)

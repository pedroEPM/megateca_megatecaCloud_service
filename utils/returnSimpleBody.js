const setNote = (littleNewData) => {
    return {
        id: Number(littleNewData.customId),
        _id: littleNewData._id,
        anuary: littleNewData.anuary ?? false,
        content: littleNewData.content ?? '',
        // customId: segundoID,
        date: new Date(littleNewData.date) ?? '',
        editionRef: littleNewData.editionRef ?? null,
        idMegamedia: `cIDM-${littleNewData.idMegamedia}` ?? null,
        idOriginal: littleNewData.idOriginal ?? null,
        isPublished: littleNewData.isPublished ?? false,
        isSelleable: littleNewData.isSelleable ?? false,
        isYearbook: littleNewData.isYearbook ?? false,
        LastModifyDate: new Date(littleNewData.LastModifyDate) ?? new Date().toISOString(),
        modifierAuthor: littleNewData.modifierAuthor ?? '',
        noteBookRef: littleNewData.noteBookRef ?? null,
        originalAuthor: littleNewData.originalAuthor ?? '',
        page: littleNewData.page ?? '',
        publicationRef: littleNewData.publicationRef ?? null,
        published: littleNewData.published ?? false,
        salable: littleNewData.salable ?? false,
        section: littleNewData.section ?? null,
        sectionRef: littleNewData.sectionRef ?? null,
        status: littleNewData.status ?? false,
        subTitle: littleNewData.subTitle ?? '',
        title: littleNewData.title ?? '',
        isEditedByGalileo: littleNewData.isEditedByGalileo ?? false,
        isNewId: littleNewData.isNewId,
        customId: Number(littleNewData.customId) ?? 1,
        customIdReverse: Number(littleNewData.customIdReverse) ?? 1,
    }
}

const setPDF = (littleNewData) => {
    return {
        _id: littleNewData._id,
        datePublication: littleNewData.datePublication,
        dateCreation: littleNewData.dateCreation,
        idMegamedia: littleNewData.idMegamedia,
        publication: littleNewData.publication ?? null,
        notebook: littleNewData.notebook ?? null,
        // section: littleNewData.section,
        folder: littleNewData.folder ?? '',
        // idNoticia: littleNewData.idNoticia,
        // idNoticeMegamedia: littleNewData.idNoticeMegamedia,
        // clasificationRef: littleNewData.clasificationRef,
        title: littleNewData.title ?? '',
        descriptio: littleNewData.descriptio ?? '',
        page: littleNewData.page ?? '0',
        lastEditionDate: littleNewData.lastEditionDate ?? new Date(),
        status: littleNewData.status ?? false,
        imageSrc: littleNewData.imageSrc ?? '',
        imageSrcThumb: littleNewData.imageSrcThumb ?? '',
        customId: littleNewData.customId,
        isNewId: littleNewData.isNewId,
        idMegamedia: `cIDP-${littleNewData.idMegamedia}` ?? null,

        // indexPosition: littleNewData.indexPosition,
        // isSorted: littleNewData.isSorted,
    }
}


module.exports = {
    setNote,
    setPDF,
}
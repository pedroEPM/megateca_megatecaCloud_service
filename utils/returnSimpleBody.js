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


module.exports = {
    setNote
}
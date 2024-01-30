const { updatedNoteById } = require('../queries/notes');

class Notes {
    async updatedNoteById(req, res) {
        try {
            const cId = req.params.id;
            const data = await updatedNoteById(cId, req.body);
            return res.status(200).json({
                ok: true,
                msg: data
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                ok: false,
                msg: error
            });
        }
    }
}

module.exports = new Notes();
const oldNotes = require('../models/oldNotes2');

const { getAllInfo, sendInfoInAnotherSchema } = require('../queries/advSearch');
const { setCustomParams } = require('../utils/setParams');

class AdvSearch {
    async getElements(req, res) {
        try {
            
            const cBody = req.body;
            const settingsForCounter = [
                {
                    $count: 'totalDocuments',
                },
            ];

            const cSort = cBody.cSort === -1 ? { $sort: {
                customId: 1
            } } : { $sort: {
                customIdReverse: 1
            } };
            console.log(cSort)
            const settings = [
                cSort,
                { $skip: cBody.cSkip },
                { $limit: cBody.cLimit }
            ];
            const cParams = setCustomParams(cBody);
           
            if(cParams.match) {
                settings.unshift({$match: cParams.match})
                settingsForCounter.unshift({$match: cParams.match})
            }
            if(cParams.cSearch) {
                settings.unshift({$search: cParams.cSearch})
                settingsForCounter.unshift({$search: cParams.cSearch})
            }
            
            const data = await getAllInfo(cBody.search, settings, settingsForCounter, cBody.firstTimeSearch);

            res.status(200).json({
                ok: true,
                msg: data
            });
            
        } catch (error) {
            console.log(`Error by getElements`);
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: error
            });
        }
    }

    async setElementsAnotherSchema(req, res) {
        try {
            const data = await sendInfoInAnotherSchema();
            // const data = await oldNotes.find({}).count();
            res.status(200).json({
                ok: true,
                msg: data
            });
            
        } catch (error) {
            console.log(`Error by getElements`);
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: error
            });
        }
    }
}

module.exports = new AdvSearch();
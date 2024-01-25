const { getAllInfo } = require('../queries/advSearch');
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
            const settings = [
                { $sort: {
                    customId: 1
                } },
                { $skip: cBody.cSkip },
                { $limit: cBody.cLimit }
            ];
            const cParams = setCustomParams(cBody);
            console.log(cParams)
           
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
}

module.exports = new AdvSearch();
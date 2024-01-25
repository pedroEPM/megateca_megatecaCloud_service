// const oldNotes = require('../models/oldNotes2');
const { closeDB, openDB } = require('../utils/mongoConntection');
const fs = require('fs');

const getAllNotes = async (body = {}) => {
    try {
        const whereSearching = [ 
            'title',
            'subTitle',
            'originalAuthor',
            'modifierAuthor',
            'content'
        ];
        const db = await openDB();
        // console.log(db.collection)
        // const getNotes = await db.collection('oldnotes2').aggregate([
        //     {
        //         $search: {
        //             index: "allNotesIndex",
        //             // phrase: {
        //             //     query: '"los acumuladores que despidieron gran cantidad de gases"',
        //             //     path: [ /*'title',
        //             //             'subTitle',
        //             //             'originalAuthor',
        //             //             'modifierAuthor',*/
        //             //             'content']
        //             // }
        //         }
        //     }
        // ]).limit(20).toArray();

        const getNotes = await db.collection('allnotes').aggregate([
            {
                $search: {
                    index: "allNotesIndex",
                    // text: {
                    //     query: ['beyonce'],
                    //     path: [ 'title',
                    //             'subTitle',
                    //             'originalAuthor',
                    //             'modifierAuthor',
                    //             'content'],
                    // },
                    // phrase: {
                    //     query: [
                    //                 // 'beyonce',
                    //                 'sorprender una vez mas'
                    //             ],
                    //     path: [ 'title',
                    //             'subTitle',
                    //             'originalAuthor',
                    //             'modifierAuthor',
                    //             'content']
                    // }
                    compound: {
                        // must: [{
                        //     phrase: {
                        //         query: 'sorprender una vez mas',
                        //         path: whereSearching
                        //     },
                            
                        // }],
                        should: [
                            {
                                text: {
                                    query: 'beyonce',
                                    path: whereSearching
                                }
                            },
                            {
                                text: {
                                    query:'rihanna',
                                    path: whereSearching
                                }
                            }
                        ],
                        mustNot: [
                            {
                                text: {
                                    query: "interpreto",
                                    path: whereSearching
                                }
                            }
                        ],
                        "minimumShouldMatch": 2
                    }
                }
            },
            {
                
                $match: {
                        date: { $gte: new Date("2014-12-31"), $lte: new Date("2016-01-01") 
                    }
                },
            },
            {
                $count: 'totalDocuments',
            },
        ]).next();
       
        await closeDB(); 
 
        fs.writeFile('myjsonfile.json', JSON.stringify(getNotes), function(err) {
            if (err) {
                console.log(err);
            }
        }); 
        console.log('-- --')
        console.log(getNotes)
        console.log('-- --')

    } catch (error) {
        console.log(error);
        console.error('We have an error');
    }
}

module.exports = {
    getAllNotes
}

   
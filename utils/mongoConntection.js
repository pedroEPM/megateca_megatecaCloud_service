const { MongoClient } = require('mongodb');
 
// Connection URL
const url = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@clustermegateca.ymjsd.mongodb.net/`;
const client = new MongoClient(url);

const dbName = 'megamedia';

const openDB = async () => {
  // Use connect method to connect to the server
  console.log(url)

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
//   const collection = db.collection('oldNotes2');
//   console.log(collection)
  return db;

  // the following code examples can be pasted here...

  return 'done.';
}

const closeDB = async () => {
    try {
        await client.close();
    } catch (error) {
        console.log(error);
        console.error('Error by close DB');
    }
}


module.exports = {
    openDB,
    closeDB,
}

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

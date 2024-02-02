const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@clustermegateca.ymjsd.mongodb.net/megamedia`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  minPoolSize: 20
}).then(() => {
  console.log('Database: \x1b[32m%s\x1b[0m', 'connected')
}).catch((err) => {
  console.error('\x1b[31m%s\x1b[0m', 'Error creating connection with db')
})

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
// db.once('open', () => {
//   console.log('Conectado a MongoDB');
// });

// module.exports = mongoose;
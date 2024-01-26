const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@clustermegateca.ymjsd.mongodb.net/megamedia`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true, // Mantener la conexión abierta
  socketTimeoutMS: 0, // Deshabilitar el tiempo de espera de la conexión
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

module.exports = mongoose;
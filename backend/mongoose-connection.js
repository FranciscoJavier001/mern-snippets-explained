/**
 * mongoose-connection.js
 * Ejemplo de conexión a MongoDB con Mongoose (no se conecta por defecto).
 */
const mongoose = require('mongoose');

async function connectMongo(uri) {
  if (!uri) throw new Error('Mongo URI requerida');
  await mongoose.connect(uri);
  console.log('Mongo conectado');
  return mongoose.connection;
}

module.exports = { connectMongo };

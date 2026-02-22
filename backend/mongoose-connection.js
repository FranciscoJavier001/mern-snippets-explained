/**
 * mongoose-connection.js
 * Ejemplo de conexión a MongoDB con Mongoose (no se conecta por defecto).
 */
const mongoose = require('mongoose'); 
// Importamos Mongoose, que es el ODM (librería) para conectar Node con MongoDB

async function connectMongo(uri) { 
  // Función asíncrona que se encarga de abrir la conexión a MongoDB

  if (!uri) throw new Error('Mongo URI requerida'); 
  // Si no se proporciona la URL de conexión, lanzamos un error y detenemos el proceso

  await mongoose.connect(uri); 
  // Intenta conectarse a MongoDB usando la URI proporcionada (espera a que termine)

  console.log('Mongo conectado'); 
  // Log para saber que la conexión fue exitosa

  return mongoose.connection; 
  // Retorna el objeto de conexión activo por si se quiere usar en otros módulos
}

module.exports = { connectMongo }; 
// Exportamos la función para poder usarla en otros archivos
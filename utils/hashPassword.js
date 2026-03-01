/**
 * hashPassword.js
 * Simulación de hash (NO usar en prod). Ejemplo didáctico.
 */
const crypto = require('crypto'); /* 
  Importamos el módulo nativo "crypto" de Node.js.
  Este módulo permite realizar operaciones criptográficas
  como hash, cifrado, firmas digitales, etc.
*/

function hashPassword(pw) { /* 
    Función que recibe un parámetro "pw" (password en texto plano).
    Su objetivo es transformar ese texto en un hash irreversible.
  */
  if (!pw) throw new Error('password requerida');   /* 
    Validación básica:
    Si el parámetro viene vacío, null o undefined,
    se lanza un error para evitar procesar un valor inválido.
  */
  return crypto.createHash('sha256')/* 
      Se crea un objeto hash usando el algoritmo SHA-256.
      SHA-256 genera una salida de 256 bits.
    */
   .update(pw) /* 
      Se pasa el password en texto plano al algoritmo.
      Esto alimenta el generador de hash con los datos.
    */
.digest('hex'); /* 
      Se finaliza el proceso y se obtiene el resultado.
      'hex' convierte el resultado binario en string hexadecimal.
      Este valor es el hash final.
    */
}

module.exports = { hashPassword }; /* 
  Exportamos la función para que pueda ser usada
  en otros archivos mediante require().
*/

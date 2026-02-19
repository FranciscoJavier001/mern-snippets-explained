/**
 * hashPassword.js
 * Simulación de hash (NO usar en prod). Ejemplo didáctico.
 */
const crypto = require('crypto');

function hashPassword(pw) {
  if (!pw) throw new Error('password requerida');
  return crypto.createHash('sha256').update(pw).digest('hex');
}

module.exports = { hashPassword };

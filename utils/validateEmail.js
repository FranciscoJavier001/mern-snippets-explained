/**
 * validateEmail.js
 * Utilidad simple para validar emails.
 */
function validateEmail(email) { /* Recibe un parámetro llamado email. */
  if (typeof email !== 'string') return false; /* Si lo que me mandas NO es un texto, automáticamente regreso false. */
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); /* Expresión regular (regex). .test() es un método de las expresiones regulares.*/
}

module.exports = { validateEmail }; /* Exporta esta funcion para poder usarla */

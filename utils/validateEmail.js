/**
 * validateEmail.js
 * Utilidad simple para validar emails.
 */
function validateEmail(email) {
  if (typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = { validateEmail };

/**
 * middleware-auth.js
 * Middleware simple de autenticación por header.
 */
function auth(req, res, next) {
  const token = req.headers['x-api-key'];
  if (!token || token !== 'dev-key') {
    return res.status(401).json({ error: 'No autorizado' });
  }
  next();
}

module.exports = { auth };

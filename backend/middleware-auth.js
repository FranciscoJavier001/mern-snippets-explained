/**
 * middleware-auth.js
 * Middleware simple de autenticación por header.
 */
function auth(req, res, next) { 
  // Middleware: función que recibe la request, la response y la función next()

  const token = req.headers['x-api-key']; 
  // Lee el header "x-api-key" que viene en la petición (por ejemplo desde Postman)

  if (!token || token !== 'dev-key') { 
    // Si no viene el token o el token no coincide con el valor esperado
    return res.status(401).json({ error: 'No autorizado' }); 
    // 401 = Unauthorized → corta el flujo y responde al cliente
  }

  next(); 
  // Llama a la siguiente función en la cadena de middlewares o a la ruta final
}

module.exports = { auth }; 
// Exporta el middleware para poder usarlo en otros archivos (require/import)
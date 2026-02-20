/**
 * express-basic.js
 * Servidor Express mínimo para entender el flujo request/response.
 */
const express = require('express'); 
// Express es el framework que nos permite crear el servidor y definir rutas (endpoints)

const app = express(); 
// app es la instancia del servidor que devuelve la función express()

const PORT = 3100; 
// Puerto donde va a escuchar el servidor

// Middleware básico para parsear JSON
app.use(express.json()); 
// Middleware: permite que Express pueda leer JSON que venga en el body de las peticiones

// Ruta de salud
app.get('/health', (req, res) => { 
  // Endpoint para verificar que el servidor está vivo
  res.json({ 
    status: 'ok', 
    time: new Date().toISOString() 
  }); 
  // Respondemos un JSON con estado OK y la hora actual en formato ISO (UTC)
});

// Ruta que a veces pide Chrome DevTools automáticamente
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => { 
  // Evita errores 404 cuando Chrome intenta consultar este archivo
  res.status(204).end(); 
  // 204 = No Content (respuesta vacía pero válida)
});

// Ruta de ejemplo con params
app.get('/hello/:name', (req, res) => { 
  // :name es un parámetro dinámico en la URL
  const { name } = req.params; 
  // Extraemos el parámetro name desde la URL

  res.json({ message: `Hola, ${name}!` }); 
  // Respondemos un JSON usando el valor recibido en la ruta
});

// Ruta principal
app.get('/', (req, res) => { 
  // Ruta raíz del servidor
  res.type('html').send(` 
    <h1>API OK</h1>
    <ul>
      <li><a href="/health">/health</a></li>
      <li><a href="/hello/Francisco">/hello/Francisco</a></li>
    </ul>
  `); 
  // Respondemos HTML para poder ver algo en el navegador
});

// Arranque del servidor
app.listen(PORT, () => { 
  // Levanta el servidor en el puerto definido
  console.log(`API ready:`); 
  console.log(`- Home   → http://127.0.0.1:${PORT}/`); 
  console.log(`- Health → http://127.0.0.1:${PORT}/health`); 
});
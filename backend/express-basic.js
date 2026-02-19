/**
 * express-basic.js
 * Servidor Express mínimo para entender el flujo request/response.
 */
const express = require('express');
const app = express();
const PORT = 3100;

// Middleware básico para parsear JSON
app.use(express.json());

// Ruta de salud
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(204).end(); // No Content
});

// Ruta de ejemplo con params
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hola, ${name}!` });
});

app.get('/', (req, res) => {
  res.type('html').send(`
    <h1>API OK</h1>
    <ul>
      <li><a href="/health">/health</a></li>
      <li><a href="/hello/Francisco">/hello/Francisco</a></li>
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`API ready:`);
  console.log(`- Home   → http://127.0.0.1:${PORT}/`);
  console.log(`- Health → http://127.0.0.1:${PORT}/health`);
});
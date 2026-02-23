/**
 * react-fetch-api.jsx
 * Demo: input controlado + llamada fetch + manejo básico de error.
 */

import { useState } from 'react'; // Hook para estado local en componentes funcionales.

export default function Hello() { // Componente React (se exporta como default para importarlo sin llaves).
  const [name, setName] = useState(''); // Estado "name" (string) + setter; inicia vacío.
  const [msg, setMsg] = useState('');   // Estado "msg" (string) + setter; mensaje a mostrar.

  async function send() { // Handler async: llama API usando el valor actual de "name".
    try {
      // Llama endpoint con "name" en la ruta.
      // Nota: si tu backend no tiene CORS habilitado, fallará en navegador.
      const r = await fetch(`http://localhost:3000/hello/${encodeURIComponent(name)}`);

      // Manejo de errores HTTP (fetch NO lanza error por 404/500 automáticamente).
      if (!r.ok) throw new Error(`HTTP ${r.status}`);

      const d = await r.json(); // Parsea body como JSON (puede fallar si no es JSON válido).
      setMsg(d.message);        // Actualiza UI con la propiedad "message" del JSON.
    } catch (e) {
      setMsg('Error al llamar API'); // Mensaje genérico de error (red/CORS/HTTP/JSON).
    }
  }

  return (
    <div>
      {/* Input controlado: "value" viene del estado; onChange actualiza el estado. */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="tu nombre"
      />

      {/* Botón: al hacer click ejecuta send() */}
      <button onClick={send}>Enviar</button>

      {/* Render del mensaje actual */}
      <p>{msg}</p>
    </div>
  );
}
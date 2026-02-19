/**
 * react-fetch-api.jsx
 * Ejemplo de fetch con manejo de errores.
 */
import { useState } from 'react';

export default function Hello() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  async function send() {
    try {
      const r = await fetch(`http://localhost:3000/hello/${name}`);
      const d = await r.json();
      setMsg(d.message);
    } catch (e) {
      setMsg('Error al llamar API');
    }
  }

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="tu nombre" />
      <button onClick={send}>Enviar</button>
      <p>{msg}</p>
    </div>
  );
}

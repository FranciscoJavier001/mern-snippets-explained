/**
 * react-useEffect-example.jsx
 * Ejemplo simple de useEffect para cargar datos.
 */
import { useEffect, useState } from 'react';

export default function HealthCheck() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('http://localhost:3000/health')
      .then(r => r.json())
      .then(d => setStatus(d.status))
      .catch(() => setStatus('error'));
  }, []);

  return <div>API status: {status}</div>;
}

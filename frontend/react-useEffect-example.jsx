/**
 * react-useEffect-example.jsx
 * Ejemplo simple de useEffect para cargar datos.
 */
import { useEffect, useState } from 'react'; /* Hook, maneja estado del componente y ejecuta efectos secundarios (cambios) */

export default function HealthCheck() { /* Exportamos una funcion que se ejecute */
  const [status, setStatus] = useState('loading'); /* Valor actual estado, funcion actualizar estado, estado inicial (Array desestructurado de lo que retorna useState) */

  useEffect(() => { /* Llamamos funcion useEffect que se usa 1 vez */
    fetch('http://localhost:3000/health') /* Hago una peticion de esta pagina */
      .then(r => r.json()) /* r=(response), r, pero el body en formato json */
      .then(d => setStatus(d.status)) /* Ed(objeto json) asumimos que backend responde algo */
      .catch(() => setStatus('error')); /* Si falla fetch, cambia estado a error */
  }, []);

  return <div>API status: {status}</div>; /* Renderiza, ejecute useEffect, instruccion cuando llegue la respuesta */
}

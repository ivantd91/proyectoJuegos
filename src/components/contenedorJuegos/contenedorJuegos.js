import './contenedorJuegos.css'
export function ContenedorJuegos(juego) {
  const contenedorPrincipal = document.getElementById('contenedor_juego')
  contenedorPrincipal.innerHTML = ''
  contenedorPrincipal.appendChild(juego)
}

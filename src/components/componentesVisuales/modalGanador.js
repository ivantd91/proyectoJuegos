import './modalGanador.css'
export function mostrarVentanaGanadora(reiniciarJuego) {
  const fondo = document.createElement('div')
  fondo.className = 'fondoModal'

  const modal = document.createElement('div')
  modal.className = ' modalGanador'

  const tituloModal = document.createElement('h2')
  tituloModal.textContent = ' 🎉Enhorabuena!!!🏆🏆'

  const mensaje = document.createElement('p')
  mensaje.textContent = 'Has encontrado a todos!!'

  const botonReiniciar = document.createElement('button')
  botonReiniciar.textContent = ' Jugar de nuevo '
  botonReiniciar.className = 'btnReiniciar'

  botonReiniciar.addEventListener('click', () => {
    fondo.remove()
    const contenedor_juego = document.querySelector('.divMemoria')
    reiniciarJuego(contenedor_juego)
  })
  modal.appendChild(tituloModal)
  modal.appendChild(mensaje)
  modal.appendChild(botonReiniciar)
  fondo.appendChild(modal)
  document.body.appendChild(fondo)
}

import { crearNavegador } from './src/components/Navegador/navegador.js'
import { ContenedorJuegos } from './src/components/contenedorJuegos/contenedorJuegos.js'
import { juegoMemoria } from './src/components/Juegos/Memoria/memoria.js'
const app = document.getElementById('app')
app.innerHTML = ''

const contenedorPrincipal = document.createElement('main')
contenedorPrincipal.id = 'contenedor_juego'

app.appendChild(crearNavegador())
app.appendChild(contenedorPrincipal)

//mostrar juego en botón

document.addEventListener('click', (e) => {
  if (e.target.id === 'btnJuego1') {
    ContenedorJuegos(juegoMemoria())
  }
})

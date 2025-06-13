export function crearCarta(pokemon, girarCarta) {
  const carta = document.createElement('div')
  carta.className = 'carta'

  const caraPrincipalCarta = document.createElement('div')
  caraPrincipalCarta.className = 'caraPrincipalCarta'

  const img = document.createElement('img')
  img.src = pokemon.img
  img.alt = 'Pokemon'
  img.className = 'imagenCarta'
  caraPrincipalCarta.appendChild(img)

  const caraTraseraCarta = document.createElement('div')
  caraTraseraCarta.className = 'caraTraseraCarta'
  caraTraseraCarta.textContent = '⁉️'

  carta.appendChild(caraPrincipalCarta)
  carta.appendChild(caraTraseraCarta)

  carta.addEventListener('click', () => girarCarta(carta, pokemon.id))
  return carta
}

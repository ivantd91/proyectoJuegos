export function imagenesPokemon() {
  const ids = ['130', '3', '145', '120', '7', '9', '25', '116', '150']
  const pokemons = ids.map((id) => ({
    id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }))

  const baraja = [...pokemons, ...pokemons].sort(() => Math.random() - 0.5)
  return baraja
}

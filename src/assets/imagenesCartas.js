export function imagenesPokemon() {
  const ids = ['1', '2', '4', '6', '7', '9', '25', '26', '133']
  const pokemons = ids.map((id) => ({
    id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }))

  const baraja = [...pokemons, ...pokemons].sort(() => Math.random() - 0.5)
  return baraja
}

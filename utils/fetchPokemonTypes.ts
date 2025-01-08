export type PokemonType = {
  name: string;
  url: string;
};

export async function fetchPokemonTypes(): Promise<PokemonType[]> {
  const res = await fetch('https://pokeapi.co/api/v2/type/', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch Pokémon types');
  }
  const data = await res.json();
  return data.results as PokemonType[]; // Ensure the response matches the type
}

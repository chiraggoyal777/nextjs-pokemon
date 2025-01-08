export type PokemonQuery = {
  name: string;
  url: string;
}
export type PokemonEntryType = {
  pokemon: {
    name: string;
    url: string;
  }
}

export type PokemonSingle = {
  name: string;
  image: string;
  types: string[];
  stats: { name: string; value: number }[];
  abilities: string[]; 
  moves: string[];
};


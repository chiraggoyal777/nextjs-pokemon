import { API_BASE_URL, POKEMON_ARTWORK_BASE_URL } from "../lib/constants";
import { PokemonEntryType } from "../lib/types";

export async function fetchAllPokemons(limit: number = 150) {
  const url = `${API_BASE_URL}/pokemon?limit=${limit}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch Pokemon list");
    }
    const data = await res.json();
    return data.results.map((pokemon: { name: string; url: string }) => {
      const id = pokemon.url.split("/").filter(Boolean).pop();
      return {
        id,
        name: pokemon.name,
        image: `${POKEMON_ARTWORK_BASE_URL}/${id}.png`,
      };
    });
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return [];
  }
}

export async function fetchPokemonTypes() {
  const response = await fetch(`${API_BASE_URL}/type`);
  const data = await response.json();

  return data.results.map((type: { name: string }) => type.name);
}

export async function fetchPokemonsByType(type: string) {
  const url = `${API_BASE_URL}/type/${type.toLowerCase()}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Pokemon for type: ${type}`);
    }

    const data = await res.json();
    const pokemonList = await Promise.all(
      data.pokemon.map((entry: PokemonEntryType) => {
        const id = parseInt(
          entry.pokemon.url.split("/").filter(Boolean).pop() || ""
        );
        return {
          id,
          name: entry.pokemon.name,
          image: `${POKEMON_ARTWORK_BASE_URL}/${id}.png`,
        };
      })
    );
    return pokemonList;
  } catch (error) {
    console.error("Error fetching Pokemon by type:", error);
    return [];
  }
}

export async function fetchPokemonDetails(id: number | string) {
  const url = `${API_BASE_URL}/pokemon/${id}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch Pokemon details");
    }
    const data = await res.json();

    return {
      name: data.name,
      types: data.types.map(
        (typeObj: { type: { name: string } }) => typeObj.type.name
      ),
      stats: data.stats.map(
        (statObj: { stat: { name: string }; base_stat: string }) => ({
          name: statObj.stat.name,
          value: statObj.base_stat,
        })
      ),
      abilities: data.abilities.map(
        (abilityObj: { ability: { name: string } }) => abilityObj.ability.name
      ),
      moves: data.moves.map(
        (moveObj: { move: { name: string } }) => moveObj.move.name
      ),
      image: data.sprites.other["official-artwork"].front_default,
    };
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    throw error;
  }
}

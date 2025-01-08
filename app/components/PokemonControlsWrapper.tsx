import { fetchPokemonTypes } from "../api/actions";
import PokemonSearch from "./PokemonSearch";
import PokemonSelector from "./PokemonSelector";

export default async function PokemonControlsWrapper() {
  const pokeTypes = await fetchPokemonTypes();

  return (
    <div className="flex gap-4 flex-wrap justify-center sticky top-6 z-10">
      <div className="w-full md:w-[unset]">
        <PokemonSelector types={pokeTypes} />
      </div>
      <div className="w-full md:w-[unset]">
        <PokemonSearch />
      </div>
    </div>
  );
}

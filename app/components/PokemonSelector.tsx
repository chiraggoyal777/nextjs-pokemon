"use client";

import { usePokemonContext } from "../contexts/PokemonContext";
import { POKEMON_DEFAULT_TYPE } from "../lib/constants";
import { capFL } from "../lib/helpers";

type PokeTypesProps = {
  types: Array<string>;
};

export default function PokemonSelector({ types }: PokeTypesProps) {
  const { type, setType } = usePokemonContext();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  return (
    <select
      aria-label="Choose a Pokemon type"
      className="w-full shadow-lg focus:shadow-xl text-2xl grow bg-white rounded-xl py-3 px-4 border-2 border-white focus:border-cyan-900 focus:bg-white text-cyan-900 transition-colors"
      id="pokemon-type-select"
      onChange={handleSelectChange}
      defaultValue={type}
    >
      <option value={POKEMON_DEFAULT_TYPE} className="text-base">
        {capFL(POKEMON_DEFAULT_TYPE)}
      </option>
      {types.map((type) => (
        <option key={type} value={type} className="text-base">
          {capFL(type)}
        </option>
      ))}
    </select>
  );
}

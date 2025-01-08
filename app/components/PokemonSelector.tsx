"use client";

import { useState } from "react";

type PokemonType = {
  name: string;
  url: string;
};

type PokemonSelectorProps = {
  types: PokemonType[];
};

export default function PokemonSelector({ types }: PokemonSelectorProps) {
  const [selectedType, setSelectedType] = useState<string>("all");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      <label htmlFor="pokemon-type-select">Choose a Pokemon type:</label>
      <select
        className="block w-full bg-gray-100 rounded-md py-2 h-10 pl-2 pr-10 border-2 border-gray-100 focus:border-gray-400 focus:bg-white text-gray-800 transition-colors"
        id="pokemon-type-select"
        value={selectedType}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <p>
        <strong>Selected Type:</strong> {selectedType}
      </p>
    </div>
  );
}

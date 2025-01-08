"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllPokemons, fetchPokemonsByType } from "@/app/api/actions";
import { POKEMON_DEFAULT_TYPE } from "../lib/constants";
import { useDebounce } from "../lib/hooks";
import { PokemonQuery } from "../lib/types";

type Pokemon = {
  id: string;
  name: string;
  image: string;
};

type PokemonContextType = {
  type: string;
  setType: (type: string) => void;
  query: string;
  debouncedQuery: string;
  setQuery: (query: string) => void;
  filteredPokemons: Pokemon[];
  loading: boolean;
  onClearFilters: () => void;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState(POKEMON_DEFAULT_TYPE);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  const [loading, setLoading] = useState(true);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  const fetchInitialPokemons = async () => {
    const data = await fetchAllPokemons();
    setFilteredPokemons(data);
  };

  const filterPokemons = async (type: string, query: string) => {
    setLoading(true);
    const pokemons = (type === POKEMON_DEFAULT_TYPE) ? await fetchAllPokemons() : await fetchPokemonsByType(type);
    const result = query.trim() !== "" ? pokemons.filter((pokemon: PokemonQuery) => pokemon.name.toLowerCase().includes(query.toLowerCase())) : pokemons;
    setFilteredPokemons(result);
    setLoading(false);
  };

  function onClearFilters() {
    setQuery("");
    setType(POKEMON_DEFAULT_TYPE);
    fetchInitialPokemons();
  }

  useEffect(() => {
    fetchInitialPokemons();
  }, []);

  useEffect(() => {
    filterPokemons(type, debouncedQuery);
  }, [type, debouncedQuery])

  return (
    <PokemonContext.Provider value={{ type, setType, query, debouncedQuery, setQuery, filteredPokemons, loading, onClearFilters }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
};

"use client";

import { FormEvent, useRef } from "react";
import { usePokemonContext } from "../contexts/PokemonContext";

export default function PokemonSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { query, setQuery } = usePokemonContext();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchRef.current) {
      setQuery(searchRef.current.value);
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="relative flex w-full shadow-lg rounded-xl has-[input:focus]:shadow-xl">
        <input
          aria-label="Search Pokemon"
          ref={searchRef}
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[inherit] text-2xl grow bg-white rounded-xl rounded-r-none border-r-0 py-3 px-4 md:px-6 border-2 border-white focus:border-cyan-900 focus:bg-white text-cyan-900 transition-colors"
          type="search"
          name="search"
          id="search"
          placeholder="Pokemon Name"
        />
        <button
          type="submit"
          className="text-2xl h-100 px-4 md:px-6 py-3 bg-cyan-900 text-gray-50 rounded-r-xl hover:bg-cyan-950 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}

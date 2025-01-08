"use client";

import { useState } from "react";

export default function PokemonSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Handle the input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click (can be expanded to trigger actual search)
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Implement your search logic here (e.g., trigger API call)
  };

  // Optionally, handle "Enter" key press
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <form>
      <label htmlFor="pokemon-search">Search Pokemon</label>

      <div className="relative flex h-10 w-full">

        {/* Search Input */}
        <input
          className="grow bg-gray-100 rounded-md rounded-r-none border-r-0 py-2 pr-2 pl-8 border-2 border-gray-100 focus:border-gray-400 focus:bg-white text-gray-800 transition-colors"
          type="search"
          name="pokemon-search"
          id="pokemon-search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress} // To handle Enter key
        />

        {/* Search Button */}
        <button
          type="submit"
          className="h-100 px-3 py-1 bg-cyan-900 text-gray-50 rounded-r-md hover:bg-cyan-950 transition-colors"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
}

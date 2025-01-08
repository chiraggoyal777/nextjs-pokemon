import PokemonSelector from "@/app/components/PokemonSelector";
import { fetchPokemonTypes, PokemonType } from "@/utils/fetchPokemonTypes";
import Image from "next/image";
import Link from "next/link";
import PokemonSearch from "./components/PokemonSearch";

export default async function HomePage() {
  let pokemonTypes: PokemonType[] = [];

  try {
    pokemonTypes = await fetchPokemonTypes();
  } catch (error) {
    console.error("Error fetching Pokémon types:", error);
  }
  return (
    <div className="p-4 lg:p-10 lg:rounded-md bg-slate-50 max-w-5xl mx-auto w-full lg:my-10 space-y-10">
      {/* Controls Wrapper */}
      <div className="flex gap-4 flex-wrap justify-center">
        <div className="w-full md:w-[unset]">
          <PokemonSelector types={pokemonTypes} />
        </div>
        <div className="w-full md:w-[unset]">
          {/* Search Control */}
          <PokemonSearch />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Grid Item */}
        <div className="relative bg-slate-100">
          <Image
            className="w-full"
            width="240"
            height="120"
            src="https://placehold.co/600x400.png"
            alt="Pokemon"
          />
          <div className="p-4">
            <h5>[Balbasur]</h5>
            <div className="mt-10">
              <Link className="" href="/balbasur">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

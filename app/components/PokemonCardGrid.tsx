"use client";
import { usePokemonContext } from "../contexts/PokemonContext";
import NoDataErrorPlaceholder from "./NoDataErrorPlaceholder";
import PokemonSingleCardMini, {
  PokemonSingleCardMiniSkeleton,
} from "./PokemonSingleCardMini";

export default function PokemonCardGrid() {
  const { filteredPokemons, loading } = usePokemonContext();
  return (
    <PokemonCardGridBase>
      {loading ? (
        Array.from(Array(20).keys()).map((_, index) => (
          <PokemonSingleCardMiniSkeleton key={index} />
        ))
      ) : filteredPokemons.length > 0 ? (
        filteredPokemons.map((pokemon) => (
          <PokemonSingleCardMini key={pokemon.name} pokemon={pokemon} />
        ))
      ) : (
        <NoDataErrorPlaceholder>No Pokemon</NoDataErrorPlaceholder>
      )}
    </PokemonCardGridBase>
  );
}
export function PokemonCardGridBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {children}
    </div>
  );
}

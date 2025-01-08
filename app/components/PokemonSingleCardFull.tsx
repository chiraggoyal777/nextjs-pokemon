import Image from "next/image";
import { PokemonSingle } from "../lib/types";
import PokemonSingleCardBase from "./PokemonSingleCardBase";
import { customLoader } from "../lib/helpers";

export default async function PokemonSingleCardFull(props: {
  pokemon: PokemonSingle;
}) {
  const { pokemon } = props;

  return (
    <PokemonSingleCardBase fullStyled>
      <div className="col-span-full md:col-span-4">
        <div className="aspect-square max-w-80">
          <Image
            className="w-full"
            width="240"
            height="240"
            src={pokemon.image}
            alt={pokemon.name}
            priority
            loader={customLoader}
          />
        </div>
      </div>
      <div className="col-span-full md:col-span-8">
        <ul className="space-y-2 text-cyan-950 text-xl font-medium capitalize">
          <li>
            <strong>Name:</strong>{" "}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
          <li>
            <strong>Type:</strong> {pokemon.types.join(", ")}
          </li>
          <li>
            <strong>Stats:</strong>{" "}
            {pokemon.stats
              .map((stat) => `${stat.name} (${stat.value})`)
              .join(", ")}
          </li>
          <li>
            <strong>Abilities:</strong> {pokemon.abilities.join(", ")}
          </li>
          <li>
            <strong>Some Moves:</strong> {pokemon.moves.slice(0, 5).join(", ")}{" "}
          </li>
        </ul>
      </div>
    </PokemonSingleCardBase>
  );
}
export function PokemonSingleCardFullSkeleton() {
  return (
    <PokemonSingleCardBase fullStyled>
      <div className="col-span-full md:col-span-4">
        <div className="aspect-square">
          <div className="bg-gray-300 h-full w-full rounded animate-pulse"></div>
        </div>
      </div>
      <div className="col-span-full md:col-span-8 space-y-2">
        <div className="bg-gray-300 h-4 mr-auto w-20 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 mr-auto w-28 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 mr-auto w-32 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 mr-auto w-52 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 mr-auto w-20 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 mr-auto w-28 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 mr-auto w-32 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 mr-auto w-52 rounded animate-pulse"></div>
      </div>
    </PokemonSingleCardBase>
  );
}

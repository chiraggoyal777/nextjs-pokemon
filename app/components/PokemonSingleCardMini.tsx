import Image from "next/image";
import Link from "next/link";
import PokemonSingleCardBase from "./PokemonSingleCardBase";
import { capFL } from "../lib/helpers";

interface PokemonCardProps {
  pokemon: { id: string; name: string; image: string };
}

const PokemonSingleCardMini: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <PokemonSingleCardBase isClickable>
      <div className="aspect-square max-w-80 mx-auto">
        <Image
          className="w-full h-full object-contain object-center"
          width="240"
          height="240"
          src={pokemon.image}
          alt={capFL(pokemon.name)}
          loading="lazy"
        />
      </div>
      <div>
        <Link className="stretched-link block" href={`/pokemon-${pokemon.name}`}>
          <h5 className="text-xl font-medium text-center">
            {capFL(pokemon.name)}
          </h5>
        </Link>
      </div>
    </PokemonSingleCardBase>
  );
};

export default PokemonSingleCardMini;

export function PokemonSingleCardMiniSkeleton() {
  return (
    <PokemonSingleCardBase>
      <div className="aspect-square">
        <div className="bg-gray-300 h-full w-full rounded animate-pulse"></div>
      </div>
      <div>
        <div className="bg-gray-300 h-4 mx-auto w-20 rounded animate-pulse"></div>
      </div>
    </PokemonSingleCardBase>
  );
}

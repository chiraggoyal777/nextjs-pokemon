import Link from "next/link";
import PokemonSingleCardFull from "../components/PokemonSingleCardFull";
import { fetchPokemonDetails } from "../api/actions";
import type { Metadata, ResolvingMetadata } from "next";
import { capFL, getPokemonFromParams } from "../lib/helpers";

type SinglePokemonPageProps = {
  params: Promise<{ pokemonName: string }>;
};

export async function generateMetadata(
  { params }: SinglePokemonPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { pokemonName } = await params;
  const pokemon = await fetchPokemonDetails(getPokemonFromParams(pokemonName));
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Everything about Pokemon ${pokemon.name}`,
    description: `Description about Pokemon ${pokemon.name}`,
    openGraph: {
      images: [...previousImages],
    },
  };
}

export default async function SinglePokemonPage({
  params,
}: SinglePokemonPageProps) {
  const { pokemonName } = await params;
  const pokemon = await fetchPokemonDetails(getPokemonFromParams(pokemonName));

  return (
    <div className="app-container">
      <div className="flex items-center gap-4">
        <Link
          className="block w-max px-6 py-2 rounded-lg text-xl font-medium shadow-lg bg-cyan-950 text-white"
          href="/"
        >
          Home
        </Link>
        <div className="text-xl py-2">
          Everything about Pokemon {`${capFL(pokemon.name)}`}
        </div>
      </div>
      <PokemonSingleCardFull pokemon={pokemon} />
    </div>
  );
}

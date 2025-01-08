import Image from "next/image";
import Link from "next/link";

export default function SinglePokemonPage() {
  return (
    <div className="p-4 lg:p-10 lg:rounded-md bg-slate-50 max-w-5xl mx-auto w-full lg:my-10 space-y-10">
      {/* Breadcrumb */}
      <div>
        <Link href="/">Home</Link>
        {` / `}
        <span>[Pokemon]</span>
      </div>

      <div>
        <div className="relative bg-slate-100 max-w-sm">
          <Image
            className="w-full"
            width="240"
            height="120"
            src="https://placehold.co/600x400.png"
            alt="Pokemon"
          />
          <div className="p-4">
            <ul>
              <li>Name: [Charizard]</li>
              <li>Type: [fire, flying]</li>
              <li>Stats: [hp, attack]</li>
              <li>Abilities: [Blaze]</li>
              <li>Some Moves: [mega-punch, fire-punch, thunder-punch]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

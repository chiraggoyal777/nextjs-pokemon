import PokemonCardGrid from "./components/PokemonCardGrid";
import PokemonControlsWrapper from "./components/PokemonControlsWrapper";
import { PokemonProvider } from "./contexts/PokemonContext";

export default function HomePage() {
  return (
    <PokemonProvider>
      <div className="app-container">
        <PokemonControlsWrapper />
        <PokemonCardGrid />
      </div>
    </PokemonProvider>
  );
}

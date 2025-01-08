import { PokemonCardGridBase } from "./components/PokemonCardGrid";
import { PokemonSingleCardMiniSkeleton } from "./components/PokemonSingleCardMini";

export default function HomeLoading() {
  return (
    <div className="app-container">
      <PokemonCardGridBase>
        {Array.from(Array(20).keys()).map((_, index) => (
          <PokemonSingleCardMiniSkeleton key={index} />
        ))}
      </PokemonCardGridBase>
    </div>
  );
}

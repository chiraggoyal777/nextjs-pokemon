export function getPokemonFromParams(input: string): string {
  if (!input.startsWith("pokemon-")) {
    throw new Error("Invalid format: Input should start with 'pokemon-'");
  }
  return input.replace("pokemon-", "");
}
export function capFL(input: string): string {
  if (!input) {
    throw new Error("Input string cannot be empty.");
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}

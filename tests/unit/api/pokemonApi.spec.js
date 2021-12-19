import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi", () => {
  it("should check axios with pokemon API", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});

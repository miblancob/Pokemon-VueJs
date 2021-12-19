import getPokemonsOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("getPokemonOptions helpers", () => {
  it("should return array with numbers", () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
  });

  it("should return array with 4 elements", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toEqual(mockPokemons);
  });

  it("should return a mixed array with getPokemonOptions", async () => {
    const pokemons = await getPokemonsOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});

import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("PokemonPage Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage, {});
  });

  it("should call mixPokemonArray on mount", () => {
    const spy = jest.spyOn(PokemonPage.methods, "mixPokemonArray");
    shallowMount(PokemonPage, {});
    expect(spy).toHaveBeenCalled();
  });

  it("should match with snapshot when pokemons are loaded", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should exist PokemonPicture and PokemonOptions", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes("pokemonid")).toBe("1");
    expect(options.attributes("pokemons")).toBeTruthy();
  });

  it("should checkAnswer", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    await wrapper.vm.checkAnswer(1);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("h2").text()).toBe(
      `Correcto!, ${mockPokemons[0].name}`
    );
  });
});

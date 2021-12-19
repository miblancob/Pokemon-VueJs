import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockPokemons,
      },
    });
  });
  it("should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should show 4 options", () => {
    const liElements = wrapper.findAll("li");
    expect(liElements.length).toBe(4);
    expect(liElements[0].text()).toBe(mockPokemons[0].name);
    expect(liElements[1].text()).toBe(mockPokemons[1].name);
    expect(liElements[2].text()).toBe(mockPokemons[2].name);
    expect(liElements[3].text()).toBe(mockPokemons[3].name);
  });

  it("should emit with params on click", () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");
    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");

    expect(wrapper.emitted("selection").length).toBe(4);
    expect(wrapper.emitted("selection")[0]).toEqual([1]);
    expect(wrapper.emitted("selection")[1]).toEqual([2]);
    expect(wrapper.emitted("selection")[2]).toEqual([3]);
    expect(wrapper.emitted("selection")[3]).toEqual([4]);
  });
});

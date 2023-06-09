import List from "../components/List"

export const metadata = {
  title: "Pokédex | Pokéteams"
}

export type Pokemon = {
  name: string;
  url: string;
};

export type Data = {
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export interface PokemonInfo {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  img: string;
}

export async function getData(
  url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getIndividualData(pokemon: Pokemon) {
  const data = await getData(pokemon.url);

  const pokemonInfo: PokemonInfo = {
    id: data.id,
    name: data.name,
    types: data.types.map((type: { type: { name: string }}) => type.type.name),
    height: data.height,
    weight: data.weight,
    img: data.sprites.other["official-artwork"].front_default,
  };

  return pokemonInfo;
}

export default async function Pokedex() {
  const data: Data = await getData("https://pokeapi.co/api/v2/pokemon/?limit=1010");
  const list: Pokemon[] = data.results;
  const pokemon: PokemonInfo[] = await Promise.all(
    list.map(async (el) => await getIndividualData(el))
  );

  return (
    <>
      <h1 className="text-3xl mb-4">Pokédex</h1>
      <div className="mb-4">
        <List pokemon={pokemon} />
      </div>
    </>
  );
}

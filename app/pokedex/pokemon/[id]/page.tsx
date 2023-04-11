import Image from "next/image";
import { getData } from "../../page";
import { PokemonInfo } from "../../page";
import AddButton from "@/app/components/AddButton";
import Link from "next/link";

export async function generateMetadata({params} : { params: { id: string } }) {
  
  const data = await getData(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);

  const { name } = data
  const pokemonName = name.charAt(0).toUpperCase().concat(name.slice(1))

  return {
    title: `${pokemonName} | Pokéteams`
  }
}

export default async function PodemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);

  const pokemon: PokemonInfo = {
    ...data,
    types: data.types.map((type: { type: { name: string }}) => type.type.name),
    img: data.sprites.other["official-artwork"].front_default,
  };

  const { name, img, types, height, weight } = pokemon;

  return (
    <div className="max-w-[1180px] mx-auto">
      <Link href='/pokedex' className="block text-md text-left transition-all duration-300 hover:opacity-50">All pokemon</Link>
      <div className="grid justify-center border rounded w-fit mx-auto my-4 py-8 px-8 gap-4">
        <h2 className="text-3xl capitalize">{name}</h2>
        <Image src={img} alt={name} width={250} height={250} />
        <div>
          <p>Type</p>
          <div className="mt-2 flex justify-center gap-4 capitalize">
            {types.map((type) => (
              <p key={type} className={`bg-${type} py-1 px-3 rounded-md text-shadow`}>{type}</p>
            ))}
          </div>
          <div className="mt-4 grid text-left justify-center">
            <p>Height: {height / 10} m</p>
            <p>Weight: {weight / 10} kg</p>
          </div>
        </div>
        <AddButton pokemon={pokemon} />
      </div>
    </div>
  );
}

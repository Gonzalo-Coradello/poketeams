import Image from "next/image";
import { getData } from "../../page";
import { PokemonInfo } from "../../page";
import AddButton from "@/app/components/AddButton";
import Link from "next/link";

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

  const { id, name, img, types, height, weight } = pokemon;

  return (
    <div className="max-w-[1180px] mx-auto">
      <Link href='/pokedex' className="block text-md text-left transition-all duration-300 hover:opacity-50">All pokemon</Link>
      <div className="grid justify-center border rounded w-fit mx-auto my-4 py-8 px-8 gap-4">
        <h1 className="text-3xl capitalize">{name}</h1>
        <Image src={img} alt={name} width={250} height={250} />
        <div>
          <p>Type</p>
          <div className="mt-2 flex justify-center gap-4 capitalize">
            {types.map((type) => (
              <p key={type} className={`bg-${type} py-1 px-3 rounded-md`}>{type}</p>
            ))}
          </div>
        </div>
        <AddButton pokemon={pokemon} />
      </div>
    </div>
  );
}

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
    <div>
      <Link href='/pokedex'>All pokemon</Link>
      <h1>{name}</h1>
      <Image src={img} alt={name} width={250} height={250} />
      <div>
        {types.map((type) => (
          <p key={type}>{type}</p>
        ))}
      </div>
      <AddButton pokemon={pokemon} />
    </div>
  );
}

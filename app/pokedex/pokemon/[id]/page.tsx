import Image from "next/image";
import { getData } from "../../page";
import { PokemonInfo } from "../../page";

export default async function PodemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);

  const pokemon: PokemonInfo = {
    ...data,
    img: data.sprites.other["official-artwork"].front_default,
  };

  const { id, name, img, types, height, weight } = pokemon;

  return (
    <div>
      <h1>{name}</h1>
      <Image src={img} alt={name} width={250} height={250} />
      <div>
        {types.map((t) => (
          <p key={t.type.name}>{t.type.name}</p>
        ))}
      </div>
    </div>
  );
}

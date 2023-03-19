import Image from "next/image";
import Link from "next/link";
import { PokemonInfo } from "../app/pokedex/page";

export default function Card({
  pokemon: { name, img, id },
}: {
  pokemon: PokemonInfo;
}) {
  return (
    <div>
      <h2>{name}</h2>
      <Image src={img} alt={name} width={250} height={250} />
      <Link href={`/pokedex/pokemon/${id}`}>Detalles</Link>
    </div>
  );
}

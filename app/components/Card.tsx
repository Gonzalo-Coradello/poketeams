import Image from "next/image";
import Link from "next/link";
import { PokemonInfo } from "../pokedex/page";
import LinkButton from "./LinkButton";

export default function Card({
  pokemon: { name, img, id },
}: {
  pokemon: PokemonInfo;
}) {
  return (
    <div className="border rounded p-4 grid justify-center gap-4">
      <h2 className="text-xl capitalize text-center">{name}</h2>
      <Image src={img} alt={name} width={250} height={250} />
      <LinkButton href={`/pokedex/pokemon/${id}`} >Details</LinkButton>
    </div>
  );
}

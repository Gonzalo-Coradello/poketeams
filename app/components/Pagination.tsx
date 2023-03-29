"use client";

import { PokemonInfo } from "../pokedex/page";
import Button from "./Button";

type Props = { page: number; pokemon: PokemonInfo[]; handlePage: Function };

export default function Pagination({ page, pokemon, handlePage }: Props) {
  const nextPageContent = pokemon.slice(page * 30, (page + 1) * 30);

  return (
    <div className="space-x-12">
      {page > 1 ? (
        <Button handleClick={() => handlePage("previous")}>Previous</Button>
      ) : <Button disabled={true}>Previous</Button> }
      {nextPageContent.length > 0 ? (
        <Button handleClick={() => handlePage("next")}>Next</Button>
      ) : <Button disabled={true}>Next</Button> }
      
    </div>
  );
}

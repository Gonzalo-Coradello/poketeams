"use client";

import { PokemonInfo } from "../app/pokedex/page";

type Props = { page: number; pokemon: PokemonInfo[]; handlePage: Function };

export default function Pagination({ page, pokemon, handlePage }: Props) {
  const nextPageContent = pokemon.slice(page * 30, (page + 1) * 30);

  return (
    <div>
      {page > 1 && (
        <button onClick={() => handlePage("previous")}>Previous</button>
      )}
      {nextPageContent.length > 0 && (
        <button onClick={() => handlePage("next")}>Next</button>
      )}
    </div>
  );
}

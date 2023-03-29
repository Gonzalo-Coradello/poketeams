"use client";

import { useContext } from "react";
import { TeamContext } from "@/app/context/TeamContext";
import { PokemonInfo } from "@/app/pokedex/page";
import Button from "./Button";

export default function AddButton({ pokemon }: { pokemon: PokemonInfo }) {
  const { team, addPokemon, removePokemon } = useContext(TeamContext);

  const handleAdd = () => {
    const { id, name, types, height, weight, img } = pokemon;
    const pokemonObject = { id, name, types, height, weight, img };

    // @ts-ignore
    addPokemon(pokemonObject);
  };

  return (
   !team?.find(p => p.id === pokemon.id) ?
  <Button handleClick={handleAdd}>Add to my team</Button> :
    // @ts-ignore
  <Button handleClick={() => removePokemon(pokemon.id)}>Remove from my team</Button>

  )
}

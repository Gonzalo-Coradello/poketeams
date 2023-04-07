"use client";

import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { TeamContext } from "@/app/context/TeamContext";
import { PokemonInfo } from "@/app/pokedex/page";
import Button from "./Button";
import { TbPokeball } from "react-icons/tb"
import { NotificationContext } from '../context/NotificationContext';

type Props = {
  pokemon: PokemonInfo;
};

export default function AddButton({ pokemon }: Props) {
  const { team, addPokemon, removePokemon } = useContext(TeamContext);
  const { setNotification } = useContext(NotificationContext);
  const pokemonName = pokemon.name.charAt(0).toUpperCase().concat(pokemon.name.slice(1))

  const handleAdd = () => {
    const { id, name, types, height, weight, img } = pokemon;
    const pokemonObject = { id, name, types, height, weight, img };

    // @ts-ignore
    addPokemon(pokemonObject);
    notify(pokemonName, "add")
  };

  const handleRemove = (id: number) => {
    // @ts-ignore
    removePokemon(id)
    notify(pokemonName, "remove")
  }

  const notify = (name: string, method: string) => {
    const message = method === "add" ? `${name} was added to your team` : `${name} was removed from your team`
    // @ts-ignore
    setNotification("success", message, <TbPokeball size={25}/>)
  }

  return (
    <>
      {!team?.find((p) => p.id === pokemon.id) ? (
        <Button handleClick={handleAdd}>Add to my team</Button>
        ) : (
          // @ts-ignore
          <Button handleClick={() => handleRemove(pokemon.id)}>
          Remove from my team
        </Button>
      )}
    </>
  );
}

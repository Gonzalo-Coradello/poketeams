"use client";

import { PokemonInfo } from "@/app/pokedex/page";
import { createContext, useState, FC } from "react";

interface Context {
  user: string;
  team: PokemonInfo[];
  addPokemon: (pokemon: PokemonInfo) => void;
  removePokemon: (id: number) => void;
  setName: (name: string) => void;
  resetTeam: () => void
}

export const TeamContext = createContext<Partial<Context>>({
  user: "",
  team: [],
});

type Team = PokemonInfo[];

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState("");
  const [team, setTeam] = useState<Team>([]);

  const addPokemon = (pokemon: PokemonInfo) => {
    if(team.length === 6) return console.log('Your team is full. You can only have 6 Pokémon.')
    if(team.find(p => p.id === pokemon.id)) return console.log(`${pokemon.name} is already on your team!`)
    setTeam([...team, pokemon]);
  };

  const removePokemon = (id: number) => {
    if(!team.find(pokemon => pokemon.id === id)) return console.log('This pokemon is not on your team')
    else {
        setTeam(prev => prev.filter(pokemon => pokemon.id !== id))
    }
  }

  const setName = (name: string) => {
    setUser(name);
  };

  const resetTeam = () => {
    setTeam([])
  }

  return (
    <TeamContext.Provider value={{ user, team, addPokemon, removePokemon, setName, resetTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

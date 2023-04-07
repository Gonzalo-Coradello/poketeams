"use client";

import Button from "@/app/components/Button";
import { TeamContext } from "@/app/context/TeamContext";
import Image from "next/image";
import { useContext } from "react";

export default function Create() {
  const { team, user, setName, removePokemon } = useContext(TeamContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // @ts-ignore
    setName(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return console.log("You must provide a username");
    // @ts-ignore
    if (team.length < 1)
      return console.log("Your team must have at least 1 Pokémon");


    const data = {user, team}

    await fetch('/api/team', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=utf-8"},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

    console.log("Team added to db");
  };

  return (
    <div className="max-w-[800px] mx-auto space-y-4 mb-4">
      <h1 className="text-3xl">Create team</h1>
      <form onSubmit={handleSubmit} className="space-y-4" >
        <input type="text" placeholder="Username" value={user} onChange={handleChange} className="py-1 px-3 rounded" />

        <div className="flex justify-center gap-4 flex-wrap">
          {/* @ts-ignore */}
          {team.map((pokemon) => (
            <div key={pokemon.id} className="relative border rounded-md p-4">
              <h4 className="capitalize">{pokemon.name}</h4>
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={125}
                height={125}
                className="mx-auto mt-2"
              />
              {/* @ts-ignore */}
              <button onClick={() => removePokemon(pokemon.id)} className="absolute top-0 right-2 hover:opacity-50 transition-opacity duration-300" >x</button>
            </div>
          ))}
        </div>

        <Button>Share team</Button>
      </form>
    </div>
  );
}

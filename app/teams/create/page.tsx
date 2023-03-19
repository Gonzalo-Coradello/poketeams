"use client";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return console.log("You must provide a username");
    // @ts-ignore
    if (team.length < 1)
      return console.log("Your team must have at least 1 Pokémon");

    // POST to API

    console.log(user, team);
    console.log("Team added to db");
  };

  return (
    <div>
      <h1>Create team</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={user} onChange={handleChange} />

        <div>
          {/* @ts-ignore */}
          {team.map((pokemon) => (
            <div key={pokemon.id}>
              <h4>{pokemon.name}</h4>
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              {/* @ts-ignore */}
              <button onClick={() => removePokemon(pokemon.id)}>x</button>
            </div>
          ))}
        </div>

        <button>Share team</button>
      </form>
    </div>
  );
}

"use client";

import 'react-toastify/dist/ReactToastify.css';
import Button from "@/app/components/Button";
import { TeamContext } from "@/app/context/TeamContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { NotificationContext } from '@/app/context/NotificationContext';
import { TbPokeball } from "react-icons/tb"

export default function Create() {
  const { team, user, setName, removePokemon, resetTeam } = useContext(TeamContext);
  const { setNotification } = useContext(NotificationContext)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // @ts-ignore
    setName(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* @ts-ignore */
    if (!user) return setNotification("error", "You must provide a username");
    // @ts-ignore
    if (team.length < 1) return setNotification("error", "Your team must have at least 1 Pokémon");

    const data = {user, team}

    setLoading(true)

    await fetch('/api/team', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=utf-8"},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
      {/* @ts-ignore */}
      setNotification("success", "Team successfully added to database!")
      {/* @ts-ignore */}
      resetTeam()
      router.push('/teams')
    })
    .catch(err => {
      setLoading(false)
      console.log(err)
    })
  };

  const handleRemove = ({ id, name }: {id: number, name: string}) => {
    const pokemonName = name.charAt(0).toUpperCase().concat(name.slice(1))
    /* @ts-ignore */
    removePokemon(id)
    /* @ts-ignore */
    setNotification("success", `${pokemonName} was removed from your team`, <TbPokeball size={25}/>)
  }

  if(loading) return <Loading />

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
              <button onClick={() => handleRemove(pokemon)} className="absolute top-0 right-2 hover:opacity-50 transition-opacity duration-300" >x</button>
            </div>
          ))}
        </div>

        <Button>Share team</Button>
      </form>
    </div>
  );
}

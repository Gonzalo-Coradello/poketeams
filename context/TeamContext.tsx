import { PokemonInfo } from "@/app/pokedex/page";
import { createContext, useState } from "react";

interface Context {
    user: string,
    team: PokemonInfo[],
    addPokemon?: Function,
    setName?: Function
}

export const TeamContext = createContext<Context>({
    user: '',
    team: []
})

type Team = PokemonInfo[]

export const ContextProvider = ({ children }: { children: React.ReactNode } ) => {
    const [user, setUser] = useState('')
    const [team, setTeam] = useState<Team>([])

    const addPokemon = (pokemon: PokemonInfo) => {
        setTeam([... team, pokemon])
    }

    const setName = (name: string) => {
        setUser(name)
    }

    console.log(user, team)

    return (
        <TeamContext.Provider value={{ user, team, addPokemon, setName }} >
            {children}
        </TeamContext.Provider>
    )
}


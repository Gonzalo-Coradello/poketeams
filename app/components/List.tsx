'use client'

import { useState } from "react";
import Card from "./Card";
import { PokemonInfo } from "../pokedex/page";
import Pagination from "./Pagination";
import Search from "./Search";
import Filter from "./Filter";

export default function List({ pokemon }: { pokemon: PokemonInfo[] }) {
  const initialValue = pokemon.slice(0, 30);

  const [page, setPage] = useState(1);
  const [pokemonList, setPokemonList] = useState(initialValue);
  const [search, setSearch] = useState("");
  const [type, setType] = useState('')

  const handlePage = (navigate: "previous" | "next") => {
    const newPage = navigate === "previous" ? page - 1 : page + 1;
    setPage(newPage);
    setPokemonList(pokemon.slice((newPage - 1) * 30, 30 * newPage));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setType('')
    setSearch(value);
    value
      ? setPokemonList(pokemon.filter((p) => p.name.includes(value.toLowerCase())))
      : setPokemonList(initialValue);
    setPage(1);
  };

  const handleSelect: Function = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value
    setSearch('')
    setType(selected)
    selected
      ? setPokemonList(pokemon.filter(p => p.types.includes(selected)))
      : setPokemonList(initialValue)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 justify-between md:flex-row">
        <Search
          search={search}
          setSearch={setSearch}
          handleChange={handleChange}
        />
        <Filter handleSelect={handleSelect} type={type} />
      </div>
      <div className="grid gap-4 grid-cols-fluid justify-items-center">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      {(!search && !type) && (
        <Pagination page={page} pokemon={pokemon} handlePage={handlePage} />
      )}
    </div>
  );
}

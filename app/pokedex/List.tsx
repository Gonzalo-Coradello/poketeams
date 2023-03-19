"use client";

import { useState } from "react";
import Card from "./Card";
import { PokemonInfo } from "./page";
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
      ? setPokemonList(pokemon.filter((p) => p.name.includes(value)))
      : setPokemonList(initialValue);
    setPage(1);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value
    setSearch('')
    setType(selected)
    setPokemonList(pokemon.filter(p => {
        const types = p.types.map(type => type.type.name)
        return types.includes(selected)
    }))
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleChange={handleChange}
      />
      <Filter handleSelect={handleSelect} type={type} />
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
      {(!search && !type) && (
        <Pagination page={page} pokemon={pokemon} handlePage={handlePage} />
      )}
    </div>
  );
}

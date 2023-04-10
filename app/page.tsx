import Image from "next/image";
import LinkButton from "./components/LinkButton";

export default async function Home() {
  return (
    <div>
      <h2 className="text-2xl font-medium pt-8 sm:text-3xl">Welcome to Pokéteams!</h2>
      <div className="w-full h-32 my-8 sm:h-60 sm:mt-16">
        <Image src='/pokebanner.jpg' alt="banner" width={1920} height={1080} className="object-cover h-full" />
      </div>
      <div className="flex flex-col gap-4 max-w-5xlmx-auto px-4 sm:flex-row">
        <LinkButton href="/pokedex" color="grass" >Pokédex</LinkButton>
        <LinkButton href="/teams" color="fire" >Teams</LinkButton>
        <LinkButton href="/teams/create" color="water" >Create team</LinkButton>
      </div>
    </div>
  );
}

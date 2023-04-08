import Image from "next/image";
import pokeball from "@/public/pokeball.png"

type Props = {
    id: number,
    user: string,
    createdAt: Date,
    team: Pokemon[]
}

type Pokemon = {
    id: number,
    name: string,
    types: string[],
    img: string,
    height: number,
    weight: number,
    teamId: number
}

export default function Team({  user, createdAt, team  }: Props ) {

  return (
    <div className="my-8 max-w-[800px] mx-auto space-y-2">
      <div className="flex justify-between text-lg">
        <div className="flex font-semibold">
          <h2>{user}</h2>
          <Image src={pokeball} alt="pokeball" width={25} height={25} />
        </div>
        <p className="font-light">{createdAt.toLocaleDateString()}</p>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {team.map((pokemon) => (
          <div key={pokemon.id} className="border rounded">
            <h3 className="text-xl font-semibold capitalize my-4">{pokemon.name}</h3>
            <Image className="mx-auto" src={pokemon.img} alt={pokemon.name} width='250' height='250' />
            <div className="font-medium flex justify-center gap-4 capitalize my-4">
              {pokemon.types.map((type) => (
                <p key={type} className={`bg-${type} text-sm py-1 px-3 rounded-md text-shadow`}>{type}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

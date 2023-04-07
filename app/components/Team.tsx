import Image from "next/image";

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
    <div className="my-8 max-w-[700px] mx-auto space-y-2">
      <div className="flex justify-between">
        <h2>{user}</h2>
        <p>{createdAt.toLocaleDateString()}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {team.map((pokemon) => (
          <div key={pokemon.id} className="border rounded">
            <h3 className="text-xl capitalize my-4">{pokemon.name}</h3>
            <Image className="mx-auto" src={pokemon.img} alt={pokemon.name} width='250' height='250' />
            <div className="flex justify-center gap-4 capitalize my-4">
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

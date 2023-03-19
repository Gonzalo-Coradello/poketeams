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
    <div>
      <h2>{user}</h2>
      <p>{createdAt.toLocaleDateString()}</p>
      <div>
        {team.map((pokemon) => (
          <div key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.img} alt={pokemon.name} />
            {pokemon.types.map((type) => (
              <p key={type}>{type}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

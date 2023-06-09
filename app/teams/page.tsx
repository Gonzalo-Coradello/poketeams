import Team from "@/app/components/Team";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export const metadata = {
  title: "Teams | Pokéteams"
}

export default async function Teams() {
  const teams = await prisma.team.findMany({
    include: {
      team: true,
    },
  });

  return (
    <div>
      <h1 className="text-3xl">Teams</h1>

      <div>
        {teams.reverse().map((team) => (
          <Team key={team.id} { ...team } />
        ))}
      </div>
    </div>
  );
}

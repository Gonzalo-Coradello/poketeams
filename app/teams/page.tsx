import Team from "@/app/components/Team";
import prisma from "@/lib/prisma";

export default async function Teams() {
  const teams = await prisma.team.findMany({
    include: {
      team: true,
    },
  });

  return (
    <div>
      <h1>Teams</h1>

      <div>
        {teams.map((team) => (
          <Team key={team.id} { ...team } />
        ))}
      </div>
    </div>
  );
}

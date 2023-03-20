import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const { user, team } = await req.json()

    const result = await prisma.team.create({
        data: {
            user,
            team: {
                createMany: {
                    data: team
                }
            }
        }
    })

    return NextResponse.json({ result })

}
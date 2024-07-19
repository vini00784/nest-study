import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();
const configService = new ConfigService()

async function main() {
    const team1 = await prisma.team.create({
        data: {
            name: "Manchester City"
        }
    });

    const team2 = await prisma.team.create({
        data: {
            name: "Manchester United"
        }
    });

    await prisma.coach.create({
        data: {
            name: "Pep Guardiola",
            username: "guardiola_pep",
            password: await hash("123123", +configService.get<number>('BCRYPT_SALT_ROUNDS')),
            team: {
                connect: {
                    id: team1.id
                }
            }
        }
    });

    await prisma.coach.create({
        data: {
            name: "Erick Ten Han",
            username: "ten_hag",
            password: await hash("123123", +configService.get<number>('BCRYPT_SALT_ROUNDS')),
            team: {
                connect: {
                    id: team2.id
                }
            }
        } 
    });

    await prisma.match.create({
        data: {
            result: "homeWin",
            homeTeam: {
                connect: {
                    id: team1.id
                }
            },
            awayTeam: {
                connect: {
                    id: team2.id
                }
            }
        }
    });

    await prisma.player.create({
        data: {
            name: "Phil Foden",
            username: "phil_foden",
            password: await hash("123123", +configService.get<number>('BCRYPT_SALT_ROUNDS')),
            age: 24,
            team: {
                connect: {
                    id: team1.id
                }
            }
        }
    });

    await prisma.player.create({
        data: {
            name: "Alejandro Garnacho",
            username: "ale_garnacho",
            password: await hash("123123", +configService.get<number>('BCRYPT_SALT_ROUNDS')),
            age: 20,
            team: {
                connect: {
                    id: team2.id
                }
            }
        }
    });
}

main().then(() => console.log("Database populated successfully!"));
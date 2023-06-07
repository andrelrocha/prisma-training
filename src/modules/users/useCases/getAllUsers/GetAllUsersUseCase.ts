import { User } from "@prisma/client";
import prisma from "../../../../prisma/client";


class GetAllUsersUseCase {

    async execute(): Promise<User[]> {
        const users = await prisma.user.findMany({
            orderBy: {
                name: "asc"
            },
            include: {
                movie_rent: {
                    select: {
                        movie: {
                            select: {
                                title: true
                            }
                        }
                    }
                }
            }
        })
        
        return users
    }
}

export { GetAllUsersUseCase }
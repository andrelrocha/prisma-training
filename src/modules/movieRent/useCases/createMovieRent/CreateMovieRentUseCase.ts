import { AppError } from "../../../../errors/AppError";
import prisma from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";


class CreateMovieRentUseCase {
    async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        })
        if(!movieExists) {
            throw new AppError("Movie doesn't exist")
        }

        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId: movieId
            }
        })
        if(!movieAlreadyRented) {
            throw new AppError("Movie is currently rented")
        }

        const userExists = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if(!userExists) {
            throw new AppError("User not found in our database")
        }


        await prisma.movieRent.create({
            data: {
                movieId,
                userId
            }
        })
    }
}

export { CreateMovieRentUseCase }
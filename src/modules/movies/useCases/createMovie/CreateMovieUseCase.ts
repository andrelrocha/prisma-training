import { CreateMovieDTO } from "../../dtos/createMovieDTO"
import prisma from "../../../../prisma/client"
import { Movie } from "@prisma/client"
import { AppError } from "../../../../errors/AppError"

class CreateMovieUseCase {
    
    async execute({ title, duration, release_date }: CreateMovieDTO): Promise<Movie> {
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title: title
            }
        })

        if (movieAlreadyExists) {
            throw new AppError("Movie already exists!")
        }

        const movie = await prisma.movie.create({
            data: {
                title, 
                duration, 
                release_date
            }
        })

        return movie
    }
}

export { CreateMovieUseCase }
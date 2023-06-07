import { Movie } from "@prisma/client";
import prisma from "../../../../prisma/client";


class GetMovieByReleaseDateUseCase {

    async execute(): Promise<Movie[]> {
        const movies = await prisma.movie.findMany({
            orderBy: {
                release_date: "desc"
            }
        })

        return movies
    }

}

export { GetMovieByReleaseDateUseCase }
import { Router } from "express";
import { createMovieController} from "../modules/movies/useCases/createMovie";
import { createMovieRentController } from "../modules/movieRent/useCases/createMovieRent";
import { getMovieByReleaseDateController } from "../modules/movies/useCases/getMovieByReleaseDate";

const movieRoutes = Router()

movieRoutes.post("/", (request, response) => {
    return createMovieController.handle( request, response )
})

movieRoutes.post("/rent", (request, response) => {
    return createMovieRentController.handle( request, response )
})

movieRoutes.get("/release", (request, response) => {
    return getMovieByReleaseDateController.handle( request, response )
})

export { movieRoutes }
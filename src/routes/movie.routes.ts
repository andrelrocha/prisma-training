import { Router } from "express";
import { createMovieController} from "../modules/movies/useCases/createMovie";

const movieRoutes = Router()

movieRoutes.post("/", (request, response) => {
    return createMovieController.handle( request, response )
})

export { movieRoutes }
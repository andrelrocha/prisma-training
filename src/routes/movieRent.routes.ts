import { Router } from "express";
import { createMovieRentController } from "../modules/movieRent/useCases/createMovieRent";

const movieRentRoutes = Router()

movieRentRoutes.post("/rent", (request, response) => {
    return createMovieRentController.handle( request, response )
})

export { movieRentRoutes }
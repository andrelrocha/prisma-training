import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";
import { CreateMovieRentController } from "./CreateMovieRentController";

const createMovieRentUseCase = new CreateMovieRentUseCase()

const createMovieRentController = new CreateMovieRentController(createMovieRentUseCase)

export { createMovieRentController }
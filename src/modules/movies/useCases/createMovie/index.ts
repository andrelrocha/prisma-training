import { CreateMovieUseCase } from "./CreateMovieUseCase";
import { CreateMovieController } from "./CreateMovieController";


const createMovieUseCase = new CreateMovieUseCase()

const createMovieController = new CreateMovieController(createMovieUseCase)

export { createMovieController }

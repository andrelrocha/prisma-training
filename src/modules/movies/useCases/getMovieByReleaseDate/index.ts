import { GetMovieByReleaseDateUseCase } from "./getMovieByReleaseDateUseCase";
import { GetMovieByReleaseDateController } from "./getMovieByReleaseDateController";

const getMovieByReleaseDateUseCase = new GetMovieByReleaseDateUseCase()

const getMovieByReleaseDateController = new GetMovieByReleaseDateController(getMovieByReleaseDateUseCase)

export { getMovieByReleaseDateController }
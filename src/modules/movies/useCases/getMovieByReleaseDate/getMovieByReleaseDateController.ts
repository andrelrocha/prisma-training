import { Request, Response } from "express";

import { GetMovieByReleaseDateUseCase } from "./getMovieByReleaseDateUseCase";

class GetMovieByReleaseDateController {
    constructor(private getMovieByReleaseDate: GetMovieByReleaseDateUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {

        const result = await this.getMovieByReleaseDate.execute()

        return response.status(201).json(result)
    }
}

export { GetMovieByReleaseDateController }
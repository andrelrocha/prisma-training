import { Request, Response } from "express";

import { CreateMovieUseCase } from "./CreateMovieUseCase";

class CreateMovieController {
    constructor(private createMovie: CreateMovieUseCase) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, duration, release_date } = request.body

        const result = await this.createMovie.execute({ title, duration, release_date })

        return response.status(201).json(result)
    }
}

export { CreateMovieController }
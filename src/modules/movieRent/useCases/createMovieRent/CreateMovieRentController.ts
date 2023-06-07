import { Request, Response } from "express";

import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase"


class CreateMovieRentController {
    constructor(private createMovieRent: CreateMovieRentUseCase) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { movieId, userId } = request.body

        const result = await this.createMovieRent.execute({ movieId, userId })

        return response.status(201).send()
    }
}

export { CreateMovieRentController }
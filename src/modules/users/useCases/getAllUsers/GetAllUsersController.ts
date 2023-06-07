import { Request, Response } from "express";

import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

class GetAllUsersController {
    constructor(private getAllUsers: GetAllUsersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {

        const result = await this.getAllUsers.execute()

        return response.status(201).json(result)
    }
}

export { GetAllUsersController }
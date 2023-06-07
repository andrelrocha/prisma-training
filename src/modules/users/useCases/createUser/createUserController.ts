import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    constructor(private createUser: CreateUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body

        const result = await this.createUser.execute({ name, email })

        return response.status(201).json(result)
    }
}

export { CreateUserController }
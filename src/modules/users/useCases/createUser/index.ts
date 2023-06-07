import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./createUserController";



const createUserUseCase = new CreateUserUseCase()

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
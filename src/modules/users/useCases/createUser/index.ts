import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./createUserController";



const createUserUseCase = new CreateUserUseCase()

const createCategoryController = new CreateUserController(createUserUseCase)

export { createCategoryController }
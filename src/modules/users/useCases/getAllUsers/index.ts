import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
import { GetAllUsersController } from "./GetAllUsersController";


const getAllUsersUseCase = new GetAllUsersUseCase()

const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)

export { getAllUsersController }
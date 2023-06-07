import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { getAllUsersController } from "../modules/users/useCases/getAllUsers";


const userRoutes = Router()

userRoutes.post("/", (request, response) => {
    return createUserController.handle( request, response )
})

userRoutes.get("/", (request, response) => {
    return getAllUsersController.handle( request, response )
})

export { userRoutes }
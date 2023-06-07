import { Router } from "express";
import { createCategoryController } from "../modules/users/useCases/createUser";


const userRoutes = Router()

userRoutes.post("/", (request, response) => {
    return createCategoryController.handle( request, response )
})

export { userRoutes }
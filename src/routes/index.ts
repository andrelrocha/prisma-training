import { Router } from "express"
import { userRoutes } from "./user.routes"
import { movieRoutes } from "./movie.routes"
import { movieRentRoutes } from "./movieRent.routes"

const router = Router()

router.use("/user", userRoutes)

router.use("/movie", movieRoutes)

export { router }
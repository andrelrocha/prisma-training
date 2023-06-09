import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import { router } from "./routes";
import { AppError } from "./errors/AppError";

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error  -  ${err.message}`
    })
})

const port = 3333;
app.listen(port, () => console.log("SERVER UP!"))
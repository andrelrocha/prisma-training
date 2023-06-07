import { CreateUserDTO } from "../../dtos/CreateUserDTO"
import prisma from "../../../../prisma/client"
import { User } from "@prisma/client"

class CreateUserUseCase {
    
    async execute({ name, email }: CreateUserDTO): Promise<User> {
        
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error
        }

        const user = await prisma.user.create({
            data: {
                name, 
                email
            }
        })

        return user
    }
}

export { CreateUserUseCase }
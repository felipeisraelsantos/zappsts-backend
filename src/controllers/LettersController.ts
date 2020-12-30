import { Request, Response } from "express"
import { getRepository } from "typeorm"
import Letter from "../models/Letter"
import User from "../models/User"


export default {
    async create(request: Request,response: Response) {
        
        const { content, sender, receiver, users_id } = request.body
        const letterRepository = getRepository(Letter)
        const letter = letterRepository.create({
            content, sender, receiver, users_id
        })
        await letterRepository.save(letter)
    
        return response.status(201).send(letter)
    }
}
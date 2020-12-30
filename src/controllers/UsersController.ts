import { Request, Response } from "express"
import { getRepository } from "typeorm"
import User from "../models/User"
import jwt from 'jsonwebtoken'

import * as env from 'dotenv';
env.config();
 

export default {

    async index(request: Request,response: Response) {
    
        return response.send({items: request.items})
    },

    async store(request: Request,response: Response) {
        const { name, last_name,  age} = request.body

        const token = jwt.sign({name, last_name , age},`${process.env.APP_KEY}`)
        const userRepository = getRepository(User)
        const user = userRepository.create({
            name, last_name,  age 
        })
        await userRepository.save(user)

        console.log(jwt.decode(token));
            
        return response.status(201).json(token)
    }
}
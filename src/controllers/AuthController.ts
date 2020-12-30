import { Request, Response } from "express"
import { getRepository } from "typeorm"
import User from "../models/User"
import jwt from 'jsonwebtoken'

import * as env from 'dotenv';
env.config();


export default {
    async authenticate(request: Request,response: Response) {
        const { name, last_name, age } = request.body
        const user = await getRepository(User).findOne({where:{name, last_name, age}})

        if (!user) { return response.sendStatus(401) }

        const token = jwt.sign({name: "Felipe", last_name: "Israel", age: 35},`${process.env.APP_KEY}`)

        return response.json({token})
        
    }
}
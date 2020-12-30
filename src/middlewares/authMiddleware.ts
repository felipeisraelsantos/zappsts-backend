import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

import * as env from 'dotenv';
env.config();

interface TokenLoad{
    name: string , 
    last_name: string, 
    age: number
}

export default function authMiddleware(request: Request,response: Response, next: NextFunction){
    const {authorization } = request.headers

    if (!authorization) { return response.sendStatus(401) }

    const token = authorization.replace('Bearer','').trim()

    try {
        const data = jwt.verify(token,`${process.env.APP_KEY}`)
        const { name , last_name, age } = data as TokenLoad
        request.items = { name , last_name, age }
       
        return next()
    } catch (error) {
        console.log(error);
        return response.sendStatus(401)
    }
}
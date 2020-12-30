
import jwt from 'jsonwebtoken'

import * as env from 'dotenv';
env.config();

describe('Autenticação jwt', () => {

    it('Erro na criação o JWT', async () => {

        const token = jwt.sign({name: "Felipe", last_name: "Israel", age: 35},`${process.env.APP_KEY}`)

        expect(token).toBe('ihbihb')
    })

    it('Criando o JWT com sucesso ', async () => {

        const token = jwt.sign({name: "Felipe", last_name: "quem está enviando", age: 35},`${process.env.APP_KEY}`)

        expect(token).toBe(token)
    })
})
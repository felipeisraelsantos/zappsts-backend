import request from 'supertest'
import { getRepository, createConnection, getConnection } from 'typeorm'
import  Letter  from '../../src/models/Letter'
import { app } from "../../src/app";

describe('Enviando uma Carta ao Papai Noel', () => {
    beforeEach(() => {
        return createConnection({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [Letter],
            synchronize: true,
            logging: false
        });
    });
    
    afterEach(() => {
        let conn = getConnection();
        return conn.close();
    });

    it('Carta enviada', async () => {
        const letters = await getRepository(Letter).create({
            content: "texto a ser escrito",
            sender: "quem está enviando",
            receiver: "quem irá receber"
        })

        const response = await request(app)
        .post('/letters')
        .send({
            content: letters.content,
            sender: letters.sender,
            receiver: letters.receiver
        })

        expect(response.status).toBe(201)
    })
})
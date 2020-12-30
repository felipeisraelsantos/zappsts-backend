import { Router } from 'express'

import authMiddleware from './middlewares/authMiddleware'

import LettersController from "./controllers/LettersController";
import UsersController from "./controllers/UsersController";
import AuthController from "./controllers/AuthController";

const router = Router()

router.post('/letters', authMiddleware, LettersController.create)
router.post('/users', UsersController.store)
router.get('/users', UsersController.index)
router.post('/auth', AuthController.authenticate)


export default router;  
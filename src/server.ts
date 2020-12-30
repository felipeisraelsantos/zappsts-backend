// import * as dotenv from 'dotenv';

// import express from "express";
// import './database/connection'
// import routes from './routes'

// dotenv.config();

// const app = express();
// app.use(express.json())
// app.use(routes)

// app.listen(3333)

import { app } from "./app";

import './database/connection';

app.listen(3333)
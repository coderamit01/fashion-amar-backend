import { toNodeHandler } from 'better-auth/node';
import cookieParser from 'cookie-parser';
import express from 'express'
import { auth } from './app/lib/auth';

const app = express();


app.use(express.json())
app.use(cookieParser())



app.all('/api/auth', toNodeHandler(auth));



export default app;
import { toNodeHandler } from 'better-auth/node';
import cookieParser from 'cookie-parser';
import express, { type NextFunction, type Request, type Response } from 'express'
import { auth } from './app/lib/auth';
import { IndexRoutes } from './app/routes/routes';
import helmet from 'helmet';
import cors from 'cors'
import { envVars } from './app/config/env';

const app = express();

const corsOrigins = {
  origin: envVars.APP_URL,
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  optionsSuccessStatus: 200
}
app.use(helmet())
app.use(cors(corsOrigins))



app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json())
app.use(cookieParser())



app.use('/api/v1', IndexRoutes);


app.get('/', (req,res) => {
  res.json({message: "Fashion Amar Api Is Running..!"})
})

app.use((req,res) => {
  res.status(404).json({message: "Route not found"})
})

app.use((err: Error,req: Request,res: Response,_next: NextFunction) => {
  console.log(err);
  res.status(500).json({message: "Internal server error"})
})


export default app;
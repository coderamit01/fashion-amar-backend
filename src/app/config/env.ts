import { config } from "dotenv"
import { AppError } from "../helpers/appError"

interface EnvInterface {
  PORT: string,
  DATABASE_URL: string,
  BETTER_AUTH_SECRET: string,
  BETTER_AUTH_URL: string,
}

config()

const loadEnv = ():EnvInterface => {
  const envs = [
    "PORT",
    "DATABASE_URL",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL",
  ]

  envs.forEach((env) => {
    if(!process.env[env]) {
      throw new AppError(`Missing the env file ${env}`, 404)
    }
  })

    return {
      PORT: process.env.PORT as string,
      DATABASE_URL: process.env.DATABASE_URL as string,
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
      BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
    }

}

export const envVars = loadEnv();
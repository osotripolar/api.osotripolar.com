import path from "node:path"
import { fileURLToPath } from "node:url"

import dotenv from "dotenv"

dotenv.config()

const __dirname = fileURLToPath(import.meta.url)

// VARIABLES VARIAS
export const ROOT = path.dirname(__dirname)

// VARIABLES DE ENTORNO
export const PORT = Number(process.env.PORT)

export const {
  DB_DIRECTORY
} = process.env
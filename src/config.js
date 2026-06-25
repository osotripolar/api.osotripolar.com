import path from "node:path"
import fs from "node:fs"
import { fileURLToPath } from "node:url"

import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)

dotenv.config()

// ================= COMRPOBACIONES INCIALES ===========================

export const DB_DIRECTORY = path.join(process.env.DB_DIRECTORY)

if (!(fs.existsSync(DB_DIRECTORY))){
  console.log('==========================')
  console.log('El directorio de la base de datos no existe')
  console.log(DB_DIRECTORY, 'esta ruta no existe')
  console.log('==========================')
}

// ================= EXPORTAMOS LAS VARIABLES ========================

// VARIABLES VARIAS
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS.split(",")

// VARIABLES VARIAS
export const ROOT = path.dirname(__filename)

// VARIABLES DE ENTORNO
export const PORT = Number(process.env.PORT)
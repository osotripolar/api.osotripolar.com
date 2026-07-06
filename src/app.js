import path from "node:path";
import fs from "node:fs";

import express from "express"
import cors from "cors"

import { PORT , ROOT , ALLOWED_ORIGINS} from "./config.js";
import apiPersonal from "./routers/api.personal.js"
import apiMarse from "./routers/api.marse.js"

// CONFIG ====================
const app = express()

// hay que investigar bien como funciona esto
const corsOptions = {
  origin: (origin, callback) => {
    // console.log("Origin recibido:", origin);
    if (!origin) return callback(null, true);

    // Limpiamos barra final por si acaso
    const cleanOrigin = origin.endsWith('/') ? origin.slice(0, -1) : origin;

    if (ALLOWED_ORIGINS.includes(cleanOrigin)) {
      return callback(null, true);
    }

    // ESTO TE DIRÁ EL ERROR REAL EN PM2:
    console.log("=========================================");
    console.log("CORS RECHAZADO -> El origen recibido fue:", origin);
    console.log("ALLOWED_ORIGINS actuales:", ALLOWED_ORIGINS);
    console.log("=========================================");

    callback(new Error("CORS blocked"));
  }
}
// esto tambien
app.use(cors(corsOptions))
app.use(express.json())

// RUTAS ====================

app.use('/personal',apiPersonal)
app.use('/marse',apiMarse)

app.use('/', (req, res) => {
  res.status(200).send("llegamos a api")
}) 

app.use((req, res) => {
  res.status(404).json({message: "ruta no encontrada"})
}) 

app.listen(PORT, () => {
  console.log('Server on port:', PORT)
})
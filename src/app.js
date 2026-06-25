import path from "node:path";
import fs from "node:fs";

import express from "express"
import cors from "cors"

import { PORT , ROOT , ALLOWED_ORIGINS} from "./config.js";
import apiPersonal from "./routers/api.personal.js"
import apiMarse from "./routers/api.marse.js"

// CONFIG ====================
const app = express()

const corsOptions = {
  origin: (origin, callback) =>{
    if(!origin) return callback(null, true);
    
    if(ALLOWED_ORIGINS.includes(origin)){
      return callback(null,true)
    }
    
    callback(new Error("CORS blocked"))
  }
}

app.use(express.json())
app.use(cors(corsOptions))

// RUTAS ====================

app.use('/personal',apiPersonal)
app.use('/marse',apiMarse)

app.use('/', (req, res) => {
  res.status(404).json({message: "ruta no encontrada"})
}) 

app.listen(PORT, () => {
  console.log('Server on port:', PORT)
})
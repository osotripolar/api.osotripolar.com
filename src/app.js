import path from "node:path";
import fs from "node:fs";
import express from "express"
import { PORT , ROOT} from "./config.js";

import apiPersonal from "./routers/api.personal.js"
import apiMarse from "./routers/api.marse.js"

const app = express()

// CONFIG ====================

app.use(express.json())

// RUTAS ====================

app.use('/personal',apiPersonal)
app.use('/marse',apiMarse)

app.use('/', (req, res) => {
  res.status(404).json({message: "ruta no encontrada"})
}) 

app.listen(PORT, () => {
  console.log('Server on port:', PORT)
})
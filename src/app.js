import path from "node:path";
import fs from "node:fs";

import express from "express"

import { ROOT, PORT, DB_DIRECTORY } from "./config.js";


const app = express()

console.log("directorio desde .env es", path.join(DB_DIRECTORY))
console.log("El directorio existe?: ",
  fs.existsSync(DB_DIRECTORY)
)

app.get('/', (req, res) => {
  res.send('Hola desde api node 2026')
})

app.listen(PORT, () => {
  console.log('Server on port:', PORT)
})
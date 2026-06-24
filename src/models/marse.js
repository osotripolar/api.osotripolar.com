import fs from "node:fs/promises"
import path from "node:path"
import { ROOT } from "../config.js"
import dbPersonal from "../db/marse.db.js"

const FILENAME = 'marse.sql'
const queryFile = path.join(ROOT, 'models', FILENAME)

runQuery()

// FUNCIONES ===========================

async function runQuery() {
  const query = await getQuery()
  dbPersonal.exec(query);
  console.log('QUERY REALIZADA : PERSONAL.DB')
  console.log('Se creo la tabla: forms ')
}

async function getQuery() {
  return await fs.readFile(queryFile, 'utf8')
}
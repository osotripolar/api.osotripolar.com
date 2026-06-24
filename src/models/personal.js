import fs from "node:fs/promises"
import path from "node:path"
import { ROOT } from "../config.js"
import dbPersonal from "../db/personal.db.js"

const FILENAME = 'personal.sql'
const queryFile = path.join(ROOT, 'models', FILENAME)

runQuery()

// FUNCIONES ===========================

async function runQuery() {
  const query = await getQuery()
  dbPersonal.exec(query);
  console.log('QUERY REALIZADA : PERSONAL.DB')
  console.log('Se creo la tabla: users ')
}

async function getQuery() {
  return await fs.readFile(queryFile, 'utf8')
}
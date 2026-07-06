import fs from "node:fs/promises"
import path from "node:path"
import { ROOT } from "../config.js"
import dbPanel from "../db/panel.db.js"

const FILENAME = 'panel.sql'
const queryFile = path.join(ROOT, 'models', FILENAME)

runQuery()

// FUNCIONES ===========================

async function runQuery() {
  const query = await getQuery()
  dbPanel.exec(query);
  console.log('QUERY REALIZADA : PANEL.DB')
  console.log('Se creo la tabla: users ')
}

async function getQuery() {
  return await fs.readFile(queryFile, 'utf8')
}
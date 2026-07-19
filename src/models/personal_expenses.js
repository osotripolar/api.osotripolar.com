import fs from "node:fs/promises"
import path from "node:path"
import { ROOT } from "../config.js"
import dbPersonal from "../db/personal.db.js"

const FILENAME = 'personal_expenses.sql'
const queryFile = path.join(ROOT, 'models', FILENAME)

runQuery()

// FUNCIONES ===========================

async function runQuery() {
  console.log('QUERY REALIZADA : PERSONAL_EXPENSES.DB')
  const query = await getQuery()
  dbPersonal.exec(query);
  console.log('Se crearon las tablas: categories, cash_sessions , mony_sources ,cash_sessions_sources ,movements ')
}

async function getQuery() {
  return await fs.readFile(queryFile, 'utf8')
}
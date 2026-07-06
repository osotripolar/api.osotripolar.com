import path from "node:path"
import Database from "better-sqlite3";
import { DB_DIRECTORY } from "../config.js";

const db = new Database(path.join(DB_DIRECTORY, 'panel.db'))

export default db
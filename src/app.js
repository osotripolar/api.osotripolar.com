import path from "node:path";
import fs from "node:fs" 

import { ROOT , PORT , DB_DIRECTORY} from "./config.js";

console.log( "directorio desde .env",path.join(DB_DIRECTORY))
console.log("El directorio existe?: ",
  fs.existsSync(DB_DIRECTORY)
)

console.log("root desde .env",ROOT)
console.log("port desde .env",PORT)
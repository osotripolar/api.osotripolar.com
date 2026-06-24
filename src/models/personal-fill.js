import dbPersonal from "../db/personal.db.js"

const data = [
  { "name": "omar", "username": "'orwell'" },
  { "name": "omar", "username": "'chino'" },
  { "name": "omar", "username": "'oso'" }
]

const insertData = dbPersonal
  .prepare(`INSERT INTO users (name,username) VALUES (?,?)`)

data.forEach((data) => {
  insertData.run(data.name, data.username)
})

console.log('usuarios añadidos')

import dbPersonal from "../db/marse.db.js"

const data = [
  { "name": "omar", "contact": "'orwell'" , "message" : "mensaje brandom aloskdfha"},
  { "name": "omar", "contact": "'chino'" , "message" : "mensaje brandom laksjhdf"},
  { "name": "omar", "contact": "'oso'" , "message" : "mensaje brandom lkjashdf"}
]

const insertData = dbPersonal
  .prepare(`INSERT INTO forms (name,contact,message) VALUES (?,?,?)`)

data.forEach((data) => {
  insertData.run(data.name, data.contact , data.message)
})

console.log('usuarios añadidos')

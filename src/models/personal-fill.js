import dbPersonal from "../db/personal.db.js"

// NOTEGROUP

const groups = [
  { "name": "grupo A" },
  { "name": "grupo B" },
]

const insertGroups = dbPersonal
  .prepare(`INSERT INTO notegroup (name) VALUES (?)`)

groups.forEach((data)=>{
  insertGroups.run(data.name)
})

// NOTES

const data = [
  { "content": "abejas", "group_id": 1 },
  { "content": "ardilla", "group_id": 1 },
  { "content": "barbacoa", "group_id": 2 },
  { "content": "156", "group_id": null },
  { "content": "1654", "group_id": null }
]

const insertData = dbPersonal
  .prepare(`INSERT INTO notes (content, group_id) VALUES (?,?)`)

data.forEach((data) => {
  insertData.run(data.content, data.group_id)
})

console.log('notas añadidas')

import dbPersonal from "../db/personal.db.js"

export const getNotes = (req, res) => {

  try {
    const users = dbPersonal.prepare('SELECT * FROM notes').all()
    return res.send(users)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export const postNote = (req, res) => {
  try {

    const { content, group_id } = req.body

    if (!content) {
      return res.status(400).json({ message: "El campo 'content' es obligatorio" })
    }

    const result = dbPersonal
      .prepare(`INSERT INTO notes (content, group_id) VALUES (?,?)`)
      .run(content, group_id)

    const newUser = {
      id: result.lastInsertRowid,
      content,
      group_id
    }

    return res.status(201).json(newUser)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

export const deleteNote = (req, res) => {

  try {
    const { id } = req.params

    if (!id) {
      return res.sendStatus(400)
    }

    const sentence = dbPersonal.prepare('DELETE FROM notes WHERE id = ?')
    const result = sentence.run(id)

    if (result.changes == 1) {
      return res.sendStatus(200)
    }

    return res.sendStatus(404)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }

}

export const putNote = (req,res)=>{

  try{
    const {id} = req.params
    const {content, group_id} = req.body

    const stmt = dbPersonal.prepare(`UPDATE notes SET content = ?, group_id = ? WHERE id = ?`)
    const result = stmt.run(content,group_id,id)

    if(result.changes == 1){
      return res.sendStatus(200)
    }else{
      return res.sendStatus(400)
    }

  }catch(error){
    console.log(error)
    res.sendStatus(500)
  }
  
}

export const getNoteGroup = (req, res) => {
  try {
    const users = dbPersonal.prepare('SELECT * FROM notegroup').all()
    return res.send(users)
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

export const postNoteGroup = (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ message: "El campo 'name' es obligatorio" })
    }

    const result = dbPersonal
      .prepare(`INSERT INTO notegroup (name) VALUES (?)`)
      .run(name)

    const newUser = {
      id: result.lastInsertRowid,
      name
    }

    return res.status(201).json(newUser)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

export const deleteNoteGroup = (req, res) => {

  try {
    const { id } = req.params

    if (!id) {
      return res.sendStatus(400)
    }

    const sentence = dbPersonal.prepare('DELETE FROM notegroup WHERE id = ?')
    const result = sentence.run(id)

    if (result.changes == 1) {
      return res.sendStatus(200)
    }

    return res.sendStatus(404)

  } catch (error) {
    if (error.code == 'SQLITE_CONSTRAINT_FOREIGNKEY'){
      console.log('ya pes')
    }
    return res.sendStatus(500)
  }

}
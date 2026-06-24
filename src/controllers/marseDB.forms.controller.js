import dbMarse from "../db/marse.db.js"

export const getForms = (req, res) => {
  try {
    const forms = dbMarse.prepare('SELECT * FROM forms').all()
    res.send(forms)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

export const postForm = (req, res) => {
  try {

    const {name,contact, message} = req.body

    if(!name || !contact || !message){
      return res.status(400).json({message: "Los campos 'name' , 'contact' y 'message' son obligatorios"})
    }
    
    // crear la webada

    const result = dbMarse
      .prepare(`INSERT INTO forms (name, contact , message) VALUES (?,?,?)`)
      .run(name , contact , message)
      
    res.status(201).json({message : 'formulario recibido'})

  } catch (error) {

    console.error(error)
    res.sendStatus(500)

  }
}
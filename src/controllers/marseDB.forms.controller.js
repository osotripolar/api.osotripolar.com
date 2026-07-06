import dbMarse from "../db/marse.db.js"

export const getForms = (req, res) => {
  try {
    const forms = dbMarse.prepare('SELECT * FROM forms').all()
    res.send(forms)
  } catch (error) {
    console.log('hubo un error')
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
    
    if(contact.length < 5){
      return res.status(400).json({message: "El campo 'contact' no puede tener menos de 5 caracteres"})
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
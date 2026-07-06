import dbPersonal from "../db/personal.db.js"

export const getNotes = (req,res) => {

  try{
    const users = dbPersonal.prepare('SELECT * FROM notes').all()
    return res.send(users)
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
}

export const postNote = (req,res) =>{
  res.sendStatus(204)
}

// export const postUser = (req, res) => {
//   try {

//     const { name, username } = req.body

//     if (!name || !username) {
//       return res.status(400).json({ message: "Los campos 'name' y 'username' son obligatorios" })
//     }

//     // confirmar si el username existe o no
//     const userExists = !!dbPersonal
//       .prepare('SELECT * FROM users WHERE username = ?')
//       .get(username)

//     if (userExists) {
//       return res.status(409).json({ message: "ese usuario ya existe" })
//     }

//     const result = dbPersonal
//       .prepare(`INSERT INTO users (name, username) VALUES (?,?)`)
//       .run(name, username)

//     const newUser = {
//       id: result.lastInsertRowid,
//       name,
//       username
//     }

//     res.status(201).json(newUser)

//   } catch (error) {

//     console.error(error)
//     res.sendStatus(500)

//   }
// }

// export const deleteUser = (req, res) => {
//   try {

//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// }

// export const putUser = (req, res) => {
//   try {

//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// }
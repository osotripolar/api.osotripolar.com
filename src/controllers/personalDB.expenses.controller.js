import dbPersonal from "../db/personal.db.js"

// cash_sessions
export const getCashSessions = (req, res) => {

  try {
    const users = dbPersonal.prepare('SELECT * FROM cash_sessions').all()
    return res.json(users)
    console.log(users)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export const postCashSessions = (req, res) => { // hay que editar
  try {
    const { description } = req.body

    const result = dbPersonal
      .prepare(`INSERT INTO cash_sessions (description) VALUES (?)`)
      .run(description)

    const newUser = {
      id: result.lastInsertRowid,
      description: description
    }

    return res.status(201).json(newUser)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

//cash_sessions_sources
export const getCashSessionsSources = (req, res) => {

  try {
    const users = dbPersonal.prepare('SELECT * FROM cash_sessions_sources').all()
    return res.json(users)
    console.log(users)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export const postCashSessionsSources = (req, res) => {
  try {
    const { cash_session_id, mony_source_id, starting_balance } = req.body

    const result = dbPersonal
      .prepare(`INSERT INTO cash_sessions_sources (cash_session_id , mony_source_id, starting_balance) VALUES (?,?,?)`)
      .run(cash_session_id, mony_source_id, starting_balance)

    const newData = {
      id: result.lastInsertRowid,
      cash_session_id: cash_session_id,
      mony_source_id: mony_source_id,
      starting_balance: starting_balance,
    }

    return res.status(201).json(newData)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

// categories
export const getCategories = (req, res) => {

  try {
    const users = dbPersonal.prepare('SELECT * FROM categories').all()
    return res.json(users)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export const postCategories = (req, res) => { // hay que editar
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ message: "El campo 'name' es obligatorio" })
    }

    const result = dbPersonal
      .prepare(`INSERT INTO money_sources (name) VALUES (?)`)
      .run(name)

    const newUser = {
      id: result.lastInsertRowid,
      name,
      active: 1
    }

    return res.status(201).json(newUser)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

// money_sources
export const getMoneySources = (req, res) => {

  try {
    const users = dbPersonal.prepare('SELECT * FROM money_sources').all()
    return res.json(users)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export const postMoneySources = (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ message: "El campo 'name' es obligatorio" })
    }

    const result = dbPersonal
      .prepare(`INSERT INTO money_sources (name) VALUES (?)`)
      .run(name)

    const newUser = {
      id: result.lastInsertRowid,
      name,
      active: 1
    }

    return res.status(201).json(newUser)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

// movements
export const getMovements = (req, res) => {

  try {
    const users = dbPersonal.prepare('SELECT * FROM movements').all()
    return res.json(users)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export const postMovements = (req, res) => {
  try {
    const {
      cash_session_id,
      amount,
      from_mony_source_id,
      to_mony_source_id,
      category_id,
      description
    } = req.body

    if (!amount || !cash_session_id) {
      res.status(400).json({ message: "El campo 'mount' y 'cash_session_id' son requeridos" })
      return 
    }

    const result = dbPersonal
      .prepare(`INSERT INTO movements (cash_session_id , amount_cents , from_mony_source_id , to_mony_source_id , category_id , description) VALUES (?,?,?,?,?,?)`)
      .run(cash_session_id, amount, from_mony_source_id, to_mony_source_id, category_id, description)

    const movement = dbPersonal
      .prepare('SELECT * FROM movements WHERE id = ?')
      .get(result.lastInsertRowid)

    return res.status(201).json(movement)

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}
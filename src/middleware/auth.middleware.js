import { INTERNAL_BEARER_TOKEN_DB_PERSONAL } from "../config.js"

export const isAuthMe = (req,res,next)=>{

  const authToken = req.headers.authorization

  if (authToken !== INTERNAL_BEARER_TOKEN_DB_PERSONAL){
    return res.status(403).json({message: "No tienes permiso"})
  }

  next()
}
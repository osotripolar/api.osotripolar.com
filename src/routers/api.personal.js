import { Router } from "express"
import { getNotes , postNote} from "../controllers/personalDB.notes.controller.js"
import { INTERNAL_BEARER_TOKEN_DB_PERSONAL } from "../config.js"

const router = Router()

router.use((req,res,next)=>{

  const {autorization} = req.headers

  if(autorization !== INTERNAL_BEARER_TOKEN_DB_PERSONAL){
    console.log('no paso')
    res.sendStatus(403)
  }
  console.log('paso')
  next()  
})

router.get('/notes', getNotes)
router.post('/note', postNote)

export default router
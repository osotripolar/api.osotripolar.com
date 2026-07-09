import { Router } from "express"
import { getNotes , postNote , deleteNote} from "../controllers/personalDB.notes.controller.js"
import { INTERNAL_BEARER_TOKEN_DB_PERSONAL } from "../config.js"

import { isAuthMe } from "../middleware/auth.middleware.js"

const router = Router()

// MIDDLEWHARE  DE SEGURIDAD
router.use(isAuthMe)

// API - NOTES
router.get('/notes', getNotes)
router.post('/note', postNote)
router.delete('/note/:id',deleteNote)

export default router
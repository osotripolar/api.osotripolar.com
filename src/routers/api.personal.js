import { Router } from "express"
import { getNotes , postNote , deleteNote , getNoteGroup , postNoteGroup} from "../controllers/personalDB.notes.controller.js"
import { INTERNAL_BEARER_TOKEN_DB_PERSONAL } from "../config.js"

import { isAuthMe } from "../middleware/auth.middleware.js"

const router = Router()

// MIDDLEWHARE  DE SEGURIDAD
router.use(isAuthMe)

// API - NOTES
router.get('/notes', getNotes)
router.post('/note', postNote)
router.delete('/note/:id',deleteNote)

router.get('/notegroup', getNoteGroup)
router.post('/notegroup', postNoteGroup)

export default router
import { Router } from "express"
import {
  getNotes , postNote , deleteNote , putNote ,
  getNoteGroup , postNoteGroup, deleteNoteGroup} from "../controllers/personalDB.notes.controller.js"
import { INTERNAL_BEARER_TOKEN_DB_PERSONAL } from "../config.js"

import { isAuthMe } from "../middleware/auth.middleware.js"

const router = Router()

// MIDDLEWHARE  DE SEGURIDAD
router.use(isAuthMe)

// API - NOTES
router.get('/notes', getNotes)
router.post('/note', postNote)
router.delete('/note/:id',deleteNote)
router.put('/note/:id',putNote)

router.get('/notegroup', getNoteGroup)
router.post('/notegroup', postNoteGroup)
router.delete('/notegroup/:id', deleteNoteGroup)

export default router
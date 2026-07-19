import { Router } from "express"
import { INTERNAL_BEARER_TOKEN_DB_PERSONAL } from "../config.js"
import { isAuthMe } from "../middleware/auth.middleware.js"

import {  getNotes, postNote, deleteNote, putNote, getNoteGroup, postNoteGroup, deleteNoteGroup, putNoteGroup} from "../controllers/personalDB.notes.controller.js"
import { getCashSessions, getCategories, getMoneySources, postMoneySources, postCashSessions, getCashSessionsSources, postCashSessionsSources, getMovements, postMovements } from "../controllers/personalDB.expenses.controller.js"


const router = Router()

// MIDDLEWHARE  DE SEGURIDAD
router.use(isAuthMe)

// SCHEMA : NOTES ========================================================

// API - NOTES
router.get('/notes', getNotes)
router.post('/note', postNote)
router.delete('/note/:id', deleteNote)
router.put('/note/:id', putNote)

// API - NOTEGROUP
router.get('/notegroup', getNoteGroup)
router.post('/notegroup', postNoteGroup)
router.delete('/notegroup/:id', deleteNoteGroup)
router.put('/notegroup/:id', putNoteGroup)

// SCHEMA : EXPENSES ====================================================

router.get('/cash_sessions', getCashSessions)
router.post('/cash_sessions', postCashSessions)
router.get('/categories', getCategories)
router.get('/movements', getMovements)
router.post('/movements', postMovements)
router.get('/money_sources', getMoneySources)
router.post('/money_sources', postMoneySources)
router.get('/cash_sessions_sources', getCashSessionsSources)
router.post('/cash_sessions_sources', postCashSessionsSources)

export default router
import { Router } from "express"
import { getUsers, postUser } from "../controllers/personalDB.users.controller.js"

const router = Router()

router.get('/', getUsers)
router.post('/', postUser)

export default router
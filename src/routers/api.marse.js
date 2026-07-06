import { Router } from "express"
import { getForms , postForm} from "../controllers/marseDB.forms.controller.js"

const router = Router()



router.get('/', getForms)
router.post('/', postForm)

export default router
import { Router } from "express";
import {
    getDustbin
} from '../controller/dustbin_controller.js'

const router = Router();

router.get('/dustbin',getDustbin)

export default router;
import { Router } from "express";
import { getPlatillos, getPlatillo, createPlatillo, updatePlatillo, deletePlatillo } from "../controllers/platillos.controller.js"

const router = Router();

router.get('/platillos', getPlatillos)
router.get('/platillos/:id', getPlatillo)
router.post('/platillos', createPlatillo)
router.put('/platillos/:id', updatePlatillo)
router.delete('/platillos/:id', deletePlatillo)

export default router;
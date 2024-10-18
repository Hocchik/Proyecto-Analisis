import { Router } from "express";
import { getReservaciones } from "../controllers/reservas.controller.js";

const router = Router();

router.get('/reservaciones', getReservaciones)
router.get('/reservaciones/:id', (req, res) => {})

router.post('/reservaciones', )
router.put('/reservaciones/:id', (req, res) => {})
router.delete('/reservaciones/:id', (req, res) => {})

export default router;


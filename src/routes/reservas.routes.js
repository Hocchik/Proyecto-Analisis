import { Router } from "express";
import { createReservacion, deleteReservacion, getReservacion, getReservaciones, putReservacion } from "../controllers/reservas.controller.js";

const router = Router();

router.get('/reservaciones', getReservaciones)
router.get('/reservaciones/:id', getReservacion)

router.post('/reservaciones', createReservacion )
router.put('/reservaciones/:id', putReservacion)
router.delete('/reservaciones/:id', deleteReservacion)

export default router;


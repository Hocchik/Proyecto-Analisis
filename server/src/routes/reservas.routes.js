import { Router } from "express";
import { createReservacion, deleteReservacion, getReservacion, getReservaciones, putReservacion } from "../controllers/reservas.controller.js";
import { createReservaDetalle, deleteReservaDetalle, getReservaDetalle, getReservasDetalles, updateReservaDetalle} from "../controllers/reservasdetalle.controller.js"

const router = Router();

//Reservas
router.get('/reservaciones', getReservaciones)
router.get('/reservaciones/:id', getReservacion)
router.post('/reservaciones', createReservacion )
router.put('/reservaciones/:id', putReservacion)
router.delete('/reservaciones/:id', deleteReservacion)

//DetallesReservas
router.get('/detallereserva', getReservasDetalles)
router.get('/detallereserva/:id', getReservaDetalle)
router.post('/detallereserva', createReservaDetalle )
router.put('/detallereserva/:id', updateReservaDetalle)
router.delete('/detallereserva/:id', deleteReservaDetalle)

export default router;


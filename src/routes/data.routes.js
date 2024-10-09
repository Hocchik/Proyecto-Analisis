import {Router} from 'express';
import { bucleDB } from '../controllers/Data.controller.js';

const router = Router();

router.post("/bucle", bucleDB);

export default router
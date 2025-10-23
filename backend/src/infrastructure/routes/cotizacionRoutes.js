import { Router } from 'express';
import { cotizar } from '../../controllers/cotizacionController.js';
const router = Router();
router.post('/', cotizar);
export default router;
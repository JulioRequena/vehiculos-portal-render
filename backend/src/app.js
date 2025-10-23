import express from 'express';
import cors from 'cors';
import cotizacionRoutes from './infrastructure/routes/cotizacionRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/cotizar', cotizacionRoutes);
app.get('/', (req, res) => res.send({ status: 'ok', service: 'vehiculos-backend' }));
export default app;
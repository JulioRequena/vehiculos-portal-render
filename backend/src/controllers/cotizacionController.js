import { calcularCuotaMensual } from '../application/cotizacionUseCase.js';

export async function cotizar(req, res) {
  try {
    const { modelo, precio, meses, tasa } = req.body;
    const cuota = calcularCuotaMensual(precio, meses ?? 12, tasa ?? 0.12);
    return res.json({ modelo, cuota, meses: meses ?? 12 });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}
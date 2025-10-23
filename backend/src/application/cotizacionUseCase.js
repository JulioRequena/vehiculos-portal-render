export function calcularCuotaMensual(precio, meses = 12, tasaAnual = 0.12) {
  const precioNum = Number(precio);
  if (isNaN(precioNum) || precioNum <= 0) throw new Error('Precio inválido');
  const factor = 1 + tasaAnual;
  const cuota = (precioNum * factor) / meses;
  return cuota;
}
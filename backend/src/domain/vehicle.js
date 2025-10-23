export class Vehicle {
  constructor({ id, modelo, precio }) {
    this.id = id ?? null;
    this.modelo = modelo;
    this.precio = Number(precio);
  }
}
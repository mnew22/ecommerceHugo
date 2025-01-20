import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  productos = [
    { id: 1, nombre: 'Imac 2024 32 GB', stock: true },
    { id: 2, nombre: 'Ipad Pro Silver', stock: true },
    { id: 3, nombre: 'Iphe 16 128 GB', stock: true },
  ];

  constructor() {}

  getProductos() {
    return this.productos;
  }

  deleteProducto(id: number) {
    this.productos = this.productos.filter((producto) => producto.id !== id);
  }

  updateProducto(
    id: number,
    nuevoProducto: {nombre?: string; stock?: boolean}
  ){
    const index = this.productos.findIndex((producto) => producto.id === id);

    if (index !== -1) {
      this.productos[index] = {
        ...this.productos[index],
        ...nuevoProducto
      };
    } else {
      console.log('Producto no encontrado');
    }
  }
}

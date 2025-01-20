import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/services/ecommerce.service';
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  productos: {id: number, nombre: string, descripcion: string, color: string, stock: boolean}[] = [];
  nuevoProducto: string = '';
  errorMensaje: string = '';
  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(){
    this.productos = this.ecommerceService.getProductos();
  }

  agregarProducto(){
    if (this.nuevoProducto.trim().length === 0){
      this.errorMensaje = 'El nombre del producto no puede estar vacio';
      return;
    }
    const id = this.productos.length + 1;
    this.productos.push({
      id: id,
      nombre: this.nuevoProducto,
      descripcion: 'Producto de prueba',
      color: 'Black',
      stock: true,
    });
    this.nuevoProducto = '';
    this.errorMensaje = '';
  }

  eliminarProducto(id: number){
    this.ecommerceService.deleteProducto(id);
    this.productos = this.ecommerceService.getProductos();
  }

  updateProducto(id: number){
    this.ecommerceService.updateProducto(id, {stock: false});
    this.productos = this.ecommerceService.getProductos();
  }

}

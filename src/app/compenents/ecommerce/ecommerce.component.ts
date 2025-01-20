import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/services/ecommerce.service';
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  productos: {id: number, nombre: string, stock: boolean}[] = [];
  nuevoProducto: string = '';
  errorMensaje: string = '';
  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(){
    this.productos = this.ecommerceService.getProductos();
  }

 agregarProducto(){
  if(this.nuevoProducto.trim()){
    const nuevo = {
      id: Date.now(),
      nombre: this.nuevoProducto,
      stock: false
    };
    this.ecommerceService.productos.push(nuevo);
    this.productos = this.ecommerceService.getProductos();
    this.nuevoProducto = '';

 }
 else{
  this.errorMensaje = 'El campo no puede estar vacio';
 }
}

eliminarProducto(id: number){
  this.ecommerceService.deleteProducto(id);
  this.productos = this.ecommerceService.getProductos();

}

actualizarProducto(id: number){
  const nuevaInfo = {stock: true};
  this.ecommerceService.updateProducto(id, nuevaInfo);
  this.productos = this.ecommerceService.getProductos();
}
}

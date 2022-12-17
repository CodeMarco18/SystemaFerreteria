import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  id:String
  producto:Producto[];
  constructor(private productoService:ProductosService, private router:Router) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  private listarProductos(){
    this.productoService.listaProducto()
    .subscribe(data=>{
      this.producto=data;
    });
  }

  detalleProducto(id:String){
    this.router.navigate(['detalleProducto',id])
  }
  editarProducto(id:String){
    this.router.navigate(['editarProducto',id])
  }
  eliminarProducto(id:String){
    this.productoService.eliminarProducto(id).subscribe(dato=>{
      console.log(dato);
      alert("Se elimino correctamente el Producto");
     
      this.listarProductos();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
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
}

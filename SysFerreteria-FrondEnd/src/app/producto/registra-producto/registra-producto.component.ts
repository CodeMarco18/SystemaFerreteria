import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-registra-producto',
  templateUrl: './registra-producto.component.html',
  styleUrls: ['./registra-producto.component.css']
})
export class RegistraProductoComponent implements OnInit {

  producto:Producto=new Producto();
  constructor(private productoService:ProductosService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarProducto(){
    this.productoService.registrarProducto(this.producto)
    .subscribe(data=>{
      
      console.log(data);
      alert("Se registro correctamente..");
      this.router.navigate(["/productos"]);
    }, error=>console.log(error));

  }
  guardar(){
    console.log(this.producto);
    this.guardarProducto();
  }

}

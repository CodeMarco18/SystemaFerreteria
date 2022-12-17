import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { Producto } from 'src/app/modelo/producto';
import { Venta } from 'src/app/modelo/venta';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosService } from 'src/app/services/productos.service';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-registra-ventas',
  templateUrl: './registra-ventas.component.html',
  styleUrls: ['./registra-ventas.component.css']
})
export class RegistraVentasComponent implements OnInit {

  venta:Venta=new Venta();
  producto: Producto[];
  cliente:Cliente[];
  constructor(private ventasService:VentasService,
              private productosService: ProductosService, 
              private clientesService: ClientesService,
              private router:Router) { }

  ngOnInit(): void {
    this.listarProductos();
    this.listarCLientes();
  }
  guardarVentas(){
    this.ventasService.registrarVenta(this.venta)
    .subscribe(data=>{
      
      console.log(data);
      alert("Se registro correctamente..");
      this.router.navigate(["/ventas"]);
    }, error=>console.log(error));

  }
  guardar(){
    console.log(this.venta);
    this.guardarVentas();
  }

  private listarProductos(){
    this.productosService.listaProducto()
    .subscribe(data=>{
      this.producto=data;
    });
  }

  private listarCLientes(){
    this.clientesService.listaClientes()
    .subscribe(data=>{
      this.cliente=data;
    });
  }

}


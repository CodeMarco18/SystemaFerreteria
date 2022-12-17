import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { Venta } from 'src/app/modelo/venta';
import { ProductosService } from 'src/app/services/productos.service';
import { VentasService } from 'src/app/services/ventas.service';


@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {

  id: String
  ventas: Venta[];
  constructor(private ventasService: VentasService, private router: Router) { }

  ngOnInit(): void {
    this.listarVentas();
  }

  private listarVentas() {
    this.ventasService.listaVenta()
      .subscribe(data => {
        this.ventas = data;
      });
  }

  detalleVenta(id: String) {
    this.router.navigate(['detalleVenta', id])
  }

  
}

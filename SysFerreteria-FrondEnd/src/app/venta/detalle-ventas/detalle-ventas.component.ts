import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venta } from 'src/app/modelo/venta';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-detalle-ventas',
  templateUrl: './detalle-ventas.component.html',
  styleUrls: ['./detalle-ventas.component.css']
})
export class DetalleVentasComponent implements OnInit {
  id!:String;
  venta:Venta = new Venta(); 
  constructor(private ventasService:VentasService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.ventasService.obtenerVentaPorId(this.id).subscribe(data=>{
      this.venta=data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  id!:String;
  producto:Producto = new Producto(); 
  constructor(private productosService:ProductosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productosService.obtenerProductoPorId(this.id).subscribe(data=>{
      this.producto=data;
    });
  }


}

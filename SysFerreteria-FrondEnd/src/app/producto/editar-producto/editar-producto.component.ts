import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id!:String;
  producto:Producto=new Producto();
  constructor(private productosService:ProductosService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productosService.obtenerProductoPorId(this.id).subscribe(data=>{
      this.producto=data;
    });
  }
  guardar(){
    this.productosService.actualizarProducto(this.id,this.producto).subscribe(data=>{
      alert("Se actualizo correctamente el Producto..");
      this.router.navigate(['/productos']);
    }, error =>console.log(error));
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/modelo/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {
  id!:String;
  empleado:Empleado = new Empleado(); 
  constructor(private empleadosService:EmpleadoService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.empleadosService.obtenerEmpleadoPorId(this.id).subscribe(data=>{
      this.empleado=data;
    });
  }


}

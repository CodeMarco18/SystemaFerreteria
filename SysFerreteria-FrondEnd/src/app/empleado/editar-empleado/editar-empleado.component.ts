import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  id:String;
  empleado:Empleado=new Empleado();
  constructor(private EmpleadosService:EmpleadoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.EmpleadosService.obtenerEmpleadoPorId(this.id).subscribe(data=>{
      this.empleado=data;
    });
  }
  guardar(){
    this.EmpleadosService.actualizarEmpleado(this.id,this.empleado).subscribe(data=>{
      alert("Se actualizo correctamente el empleado..");
      this.router.navigate(['/empleados']);
    }, error =>console.log(error));
  }
}

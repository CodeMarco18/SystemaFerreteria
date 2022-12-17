import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-registra-empleado',
  templateUrl: './registra-empleado.component.html',
  styleUrls: ['./registra-empleado.component.css']
})
export class RegistraEmpleadoComponent implements OnInit {

  empleado:Empleado=new Empleado();
  constructor(private empleadoService:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoService.registrarEmpleados(this.empleado)
    .subscribe(data=>{
      
      console.log(data);
      alert("Se registro correctamente..");
      this.router.navigate(["/empleados"]);
    }, error=>console.log(error));

  }
  guardar(){
    console.log(this.empleado);
    this.guardarEmpleado();
  }

}

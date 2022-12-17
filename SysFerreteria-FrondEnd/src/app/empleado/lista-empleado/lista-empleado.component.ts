import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  empleados:Empleado[];
  constructor(private empleadoService:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
   this.listarEmpleados();
  }

  private listarEmpleados(){
    this.empleadoService.listaEmpleados()
    .subscribe(data=>{
      this.empleados=data;
    });
  }

  detalleEmpleado(id:String){
    this.router.navigate(['detalleEmpleado',id])
  }
  editarEmpleado(id:String){
    this.router.navigate(['editarEmpleado',id])
  }
  eliminarEmpleado(id:String){
    this.empleadoService.eliminarEmpleado(id).subscribe(dato=>{
      console.log(dato);
      alert("Se elimino correctamente el Empleado");
     
      this.listarEmpleados();
    })
  }

}

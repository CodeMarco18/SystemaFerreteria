import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { RegistraEmpleadoComponent } from './registra-empleado/registra-empleado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaEmpleadoComponent,
    DetalleEmpleadoComponent,
    EditarEmpleadoComponent,
    RegistraEmpleadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ListaEmpleadoComponent,
    RegistraEmpleadoComponent
  ]
})
export class EmpleadoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistraClientesComponent } from './registra-clientes/registra-clientes.component';
import { RouterModule } from '@angular/router';
import { DetalleClientesComponent } from './detalle-clientes/detalle-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaClientesComponent,
    RegistraClientesComponent,
    DetalleClientesComponent,
    EditarClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ListaClientesComponent,
    RegistraClientesComponent
  ]
})
export class ClienteModule { }

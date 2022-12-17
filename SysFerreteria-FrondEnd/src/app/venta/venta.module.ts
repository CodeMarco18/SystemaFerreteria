import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistraVentasComponent } from './registra-ventas/registra-ventas.component';
import { DetalleVentasComponent } from './detalle-ventas/detalle-ventas.component';
import { ListaVentasComponent } from './lista-ventas/lista-ventas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RegistraVentasComponent,
    DetalleVentasComponent,
    ListaVentasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ListaVentasComponent,
    RegistraVentasComponent
  ]
})
export class VentaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistraProductoComponent } from './registra-producto/registra-producto.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    EditarProductoComponent,
    DetalleProductosComponent,
    ListaProductosComponent,
    RegistraProductoComponent,
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    ProductosService,
    RegistraProductoComponent
  ]
})
export class ProductoModule { }

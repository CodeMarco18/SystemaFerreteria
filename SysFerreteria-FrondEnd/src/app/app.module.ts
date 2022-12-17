import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { CuerpoComponent } from './estructura/cuerpo/cuerpo.component';
import { EstructuraModule } from './estructura/estructura.module';
import { ProductoModule } from './producto/producto.module';
import { ProductosService } from './services/productos.service';
import{ HttpClientModule}from '@angular/common/http';
import { RegistraClientesComponent } from './cliente/registra-clientes/registra-clientes.component';
import { DetalleClientesComponent } from './cliente/detalle-clientes/detalle-clientes.component';
import { EditarClientesComponent } from './cliente/editar-clientes/editar-clientes.component';
import { EmpleadoModule } from './empleado/empleado.module';
import { ListaEmpleadoComponent } from './empleado/lista-empleado/lista-empleado.component';
import { RegistraEmpleadoComponent } from './empleado/registra-empleado/registra-empleado.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { ListaProductosComponent } from './producto/lista-productos/lista-productos.component';
import { RegistraProductoComponent } from './producto/registra-producto/registra-producto.component';
import { DetalleProductosComponent } from './producto/detalle-productos/detalle-productos.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { RegistraVentasComponent } from './venta/registra-ventas/registra-ventas.component';
import { DetalleVentasComponent } from './venta/detalle-ventas/detalle-ventas.component';
import { VentaModule } from './venta/venta.module';
import { ListaVentasComponent } from './venta/lista-ventas/lista-ventas.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api


const appRoutes:Routes=[
  {path:'',component:CuerpoComponent},
  {path:'home',component:CuerpoComponent},
  {path:'clientes', component:ListaClientesComponent},
  {path:'agregarCliente', component:RegistraClientesComponent},
  {path:'detalleCliente/:id', component:DetalleClientesComponent},
  {path:'editarCliente/:id', component:EditarClientesComponent},
  {path:'empleados', component:ListaEmpleadoComponent},
  {path:'agregarEmpleado', component:RegistraEmpleadoComponent},
  {path:'detalleEmpleado/:id', component:DetalleEmpleadoComponent},
  {path:'editarEmpleado/:id', component:EditarEmpleadoComponent},
  {path:'productos', component:ListaProductosComponent},
  {path:'agregarProducto', component:RegistraProductoComponent},
  {path:'detalleProducto/:id', component:DetalleProductosComponent},
  {path:'editarProducto/:id', component:EditarProductoComponent},
  {path:'ventas', component:ListaVentasComponent},
  {path:'agregarVenta', component:RegistraVentasComponent},
  {path:'detalleVenta/:id', component:DetalleVentasComponent},


];
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstructuraModule,
    ProductoModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ClienteModule,
    EmpleadoModule,
    ProductoModule,
    VentaModule,
    AccordionModule,
    BrowserAnimationsModule,
    BrowserModule

  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';


@NgModule({
  declarations: [
    CuerpoComponent,
    PieComponent,
    MenuComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CuerpoComponent,
    PieComponent,
    MenuComponent,
    CabeceraComponent
  ]
})
export class EstructuraModule { }

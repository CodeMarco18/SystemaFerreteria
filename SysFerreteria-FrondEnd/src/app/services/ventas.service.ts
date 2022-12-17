import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../modelo/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private urlBackend = "http://localhost:8080/ventas/ventas";

  constructor(private httVenta: HttpClient) { }
  //lista los clientes del backend
  listaVenta(): Observable<Venta[]> {
    return this.httVenta.get<Venta[]>(this.urlBackend);
  }
  registrarVenta(empleado: Venta): Observable<object> {
    return this.httVenta.post<Venta>(this.urlBackend, empleado);
  }
  obtenerVentaPorId(id: String): Observable<Venta> {
    return this.httVenta.get<Venta>(this.urlBackend + '/' + id);
  }
}

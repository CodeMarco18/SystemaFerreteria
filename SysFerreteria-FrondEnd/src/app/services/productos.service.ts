import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../modelo/empleado';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService 
{
  private urlBackend="http://localhost:8080/productos/productos";

  constructor( private httProducto:HttpClient) { }
  //lista los clientes del backend
  listaProducto():Observable<Producto[]>{
    return this.httProducto.get<Producto[]>(this.urlBackend);
  }
  registrarProducto(empleado:Producto):Observable<object>{
    return this.httProducto.post<Producto>(this.urlBackend, empleado);
  }
  obtenerProductoPorId(id:String):Observable<Producto>{
    return this.httProducto.get<Producto>(this.urlBackend+'/'+id);
  }
  actualizarProducto(id:String, producto:Producto):Observable<Object>{
    return this.httProducto.put(this.urlBackend+'/'+id, producto);
  }

  eliminarProducto(id:String):Observable<Object>{
    return this.httProducto.delete(this.urlBackend+'/'+id);
  }
}

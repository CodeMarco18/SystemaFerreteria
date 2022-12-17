import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlBackend="http://localhost:8080/empleados/empleados";
  private urlBackend1="http://localhost:8080/empleados/empleado";

  constructor( private httEmpleado:HttpClient) { }
  //lista los clientes del backend
  listaEmpleados():Observable<Empleado[]>{
    return this.httEmpleado.get<Empleado[]>(this.urlBackend);
  }
  registrarEmpleados(empleado:Empleado):Observable<object>{
    return this.httEmpleado.post<Empleado>(this.urlBackend, empleado);
  }
  obtenerEmpleadoPorId(id:String):Observable<Empleado>{
    return this.httEmpleado.get<Empleado>(this.urlBackend+'/'+id);
  }
  actualizarEmpleado(id:String, empleado:Empleado):Observable<Object>{
    return this.httEmpleado.put(this.urlBackend+'/'+id, empleado);
  }

   eliminarEmpleado(id:String):Observable<Object>{
    return this.httEmpleado.delete(this.urlBackend1+'/'+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private urlBackend="http://localhost:8080/clientes/clientes";

  constructor( private httCliente:HttpClient) { }
  //lista los clientes del backend
  listaClientes():Observable<Cliente[]>{
    return this.httCliente.get<Cliente[]>(this.urlBackend);
  }
  registrarClientes(cliente:Cliente):Observable<object>{
    return this.httCliente.post<Cliente>(this.urlBackend, cliente);
  }
  obtenerClientePorId(id:String):Observable<Cliente>{
    return this.httCliente.get<Cliente>(this.urlBackend+'/'+id);
  }
  actualizarCliente(id:String, cliente:Cliente):Observable<Object>{
    return this.httCliente.put(this.urlBackend+'/'+id, cliente);
  }

  eliminarCliente(id:String):Observable<Object>{
    return this.httCliente.delete(this.urlBackend+'/'+id);
  }
}

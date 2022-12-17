import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  id:String
  clientes:Cliente[];
  constructor(private clientesService:ClientesService, private router:Router) { }

  ngOnInit(): void {
    this.listarCLientes();
  }

  private listarCLientes(){
    this.clientesService.listaClientes()
    .subscribe(data=>{
      this.clientes=data;
    });
  }

  detalleCliente(id:String){
    this.router.navigate(['detalleCliente',id])
  }
  editarCliente(id:String){
    this.router.navigate(['editarCliente',id])
  }
  eliminarCliente(id:String){
    this.clientesService.eliminarCliente(id).subscribe(dato=>{
      console.log(dato);
      alert("Se elimino correctamente el cliente");
     
      this.listarCLientes();
    })
  }
}

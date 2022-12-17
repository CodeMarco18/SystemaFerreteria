import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registra-clientes',
  templateUrl: './registra-clientes.component.html',
  styleUrls: ['./registra-clientes.component.css']
})
export class RegistraClientesComponent implements OnInit {
  cliente:Cliente=new Cliente();
  constructor(private clientesService:ClientesService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarCliente(){
    this.clientesService.registrarClientes(this.cliente)
    .subscribe(data=>{
      
      console.log(data);
      alert("Se registro correctamente..");
      this.router.navigate(["/clientes"]);
    }, error=>console.log(error));

  }
  guardar(){
    console.log(this.cliente);
    this.guardarCliente();
  }
}

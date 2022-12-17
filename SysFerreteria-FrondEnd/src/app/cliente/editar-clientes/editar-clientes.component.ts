import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

  id!:String;
  cliente:Cliente=new Cliente();
  constructor(private clientesService:ClientesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clientesService.obtenerClientePorId(this.id).subscribe(data=>{
      this.cliente=data;
    });
  }
  guardar(){
    this.clientesService.actualizarCliente(this.id,this.cliente).subscribe(data=>{
      alert("Se actualizo correctamente el cliente..");
      this.router.navigate(['/clientes']);
    }, error =>console.log(error));
  }
}

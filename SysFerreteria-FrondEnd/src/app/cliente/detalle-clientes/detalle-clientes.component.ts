import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-detalle-clientes',
  templateUrl: './detalle-clientes.component.html',
  styleUrls: ['./detalle-clientes.component.css']
})
export class DetalleClientesComponent implements OnInit {
  id!:String;
  cliente:Cliente = new Cliente(); 
  constructor(private clientesService:ClientesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clientesService.obtenerClientePorId(this.id).subscribe(data=>{
      this.cliente=data;
    });
  }

}

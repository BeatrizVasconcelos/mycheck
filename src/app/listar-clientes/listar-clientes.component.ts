import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[];
  panelOpenState = false;

  constructor(private clienteService: ClienteService) {
    this.clientes = [];
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    })
  }

  ngOnInit(): void {
  }

  onDelete(clienteId: string) {
    this.clienteService.delete(clienteId)
    .subscribe(() => {
      this.clienteService.read();
    });
  }

}

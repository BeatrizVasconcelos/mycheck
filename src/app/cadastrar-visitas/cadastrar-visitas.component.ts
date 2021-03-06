import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitaService } from '../services/visita.service';
import { Visita } from '../models/visita.model';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import { DateAdapter } from '@angular/material/core';



@Component({
  selector: 'app-cadastrar-visitas',
  templateUrl: './cadastrar-visitas.component.html',
  styleUrls: ['./cadastrar-visitas.component.scss']
})
export class CadastrarVisitasComponent implements OnInit {


  clientes: Cliente[] = [];
  visita : Visita = {
    id: '',
    cliente: '',
    data: '',
    hora: '',
    motivo: '',
    status: '',
    resultado: ''

}

  constructor(private visitaService: VisitaService, private clienteService: ClienteService,
    private router: Router, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.clientes = [];
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes;
    });
   }

  ngOnInit(): void {

  }

  cadastrarVisita(): void {
    this.visitaService.create(this.visita).subscribe(() => {
      this.visitaService.exibirMsg('Visita cadastrado com sucesso')
      this.router.navigate(['/cadastrar-visitas'])
    });

  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}




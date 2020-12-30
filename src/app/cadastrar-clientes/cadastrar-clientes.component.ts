import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.scss']
})
export class CadastrarClientesComponent implements OnInit {


  cliente : Cliente = {
    id: '',
    nome: '',
    endereco: '',
    telefone: '',
    nomePessoaContato: '',
    telefonePessoaContato: '',
    tipoCliente: '',
    preferencial: '',
    observacoes: ''

}

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.exibirMsg('Cliente cadastrado com sucesso')
      this.router.navigate(['/cadastrar-clientes'])
    });

  }

  cancel(): void {
    this.router.navigate(['/'])
  }



  }



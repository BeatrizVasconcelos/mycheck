import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitaService } from '../services/visita.service';
import { Visita } from '../models/visita.model';

@Component({
  selector: 'app-cadastrar-visitas',
  templateUrl: './cadastrar-visitas.component.html',
  styleUrls: ['./cadastrar-visitas.component.scss']
})
export class CadastrarVisitasComponent implements OnInit {

  visita : Visita = {
    id: '',
    cliente: '',
    data: '',
    hora: '',
    motivo: '',
    status: '',
    resultado: ''

}

  constructor(private visitaService: VisitaService, private router: Router) { }

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

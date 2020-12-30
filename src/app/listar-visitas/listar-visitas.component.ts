import { Component, OnDestroy, OnInit } from '@angular/core';
import { Visita } from '../models/visita.model';
import { VisitaService } from '../services/visita.service';

@Component({
  selector: 'app-listar-visitas',
  templateUrl: './listar-visitas.component.html',
  styleUrls: ['./listar-visitas.component.scss']
})
export class ListarVisitasComponent implements OnInit {

  visitas: Visita[];
  panelOpenState = false;

  constructor(private visitaService: VisitaService) {
    this.visitas = [];
    this.visitaService.read().subscribe(visitas => {
      this.visitas = visitas;
      console.log(visitas);
    });

  }

  ngOnInit(): void {


  }

  onDelete(visitaId: string) {
    this.visitaService.delete(visitaId)
    .subscribe(() => {
      this.visitaService.read();
    });
  }

}

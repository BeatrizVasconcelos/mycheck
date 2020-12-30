import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Visita } from '../models/visita.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  private visitasAtualizadas = new Subject<{visitas: Visita[], visitaCount: number}>();

  url = 'http://localhost:3000/visitas'; // API REST fake

  // injeção do HttpClient
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


exibirMsg(msg: string, isError: boolean = false): void {
  this.snackBar.open(msg, "x", {
    duration: 3000,
    horizontalPosition: "center",
    verticalPosition: "top",
    panelClass: isError ? ['msg-error'] : ['msg-success']
  });
}

create(visita: Visita): Observable<Visita> {
  return this.http.post<Visita>(this.url, visita).pipe(
    map(obj => obj),
    catchError(e => this.erroHandler(e))
  )
}

erroHandler(e : any): Observable<any>{
  this.exibirMsg('Ocorreu um erro! Tente novamente', true)
  return EMPTY
}

read(): Observable<Visita[]> {
  return this.http.get<Visita[]>(this.url).pipe(
    map(obj => obj),
    catchError(e => this.erroHandler(e))
  )
}

readById(id: string): Observable<Visita> {
  const url = `${this.url}/${id}`
  return this.http.get<Visita>(url).pipe(
    map(obj => obj),
    catchError(e => this.erroHandler(e))
  )
}

getVisitasAtualizadasListener() {
  return this.visitasAtualizadas.asObservable();
}

update(visita: Visita): Observable<Visita> {
  const url = `${this.url}/${visita.id}`
  return this.http.put<Visita >(url,visita).pipe(
    map(obj => obj),
    catchError(e => this.erroHandler(e))
  )
}

delete(id: string): Observable<Visita> {
  const url = `${this.url}/${id}`
  return this.http.delete<Visita>(url).pipe(
    map(obj => obj),
    catchError(e => this.erroHandler(e))
  )
}


// headers
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

}

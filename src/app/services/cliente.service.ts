import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cliente } from '../models/cliente.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  url = 'http://localhost:3000/clientes'; // API REST fake

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

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  erroHandler(e : any): Observable<any>{
    this.exibirMsg('Ocorreu um erro! Tente novamente', true)
    return EMPTY
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  readById(id: string): Observable<Cliente> {
    const url = `${this.url}/${id}`
    return this.http.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.url}/${cliente.id}`
    return this.http.put<Cliente>(url,cliente).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  delete(id: string): Observable<Cliente> {
    const url = `${this.url}/${id}`
    return this.http.delete<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }


  // headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }




}
